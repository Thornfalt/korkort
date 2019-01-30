const express = require('express');
const app = express();
const { retrieveNewData, retrieveOldData, idLookUp } = require('./dataRetrieval')
const { applyResult, acceptedLicense, rejectedLicense } = require('./acceptanceHandler')
/* 
Någon slags funktion som hämtar personid på personen som står i kö med sin ansökan för att veta vilken person och ansökan man ska titta på
Första steget, Hämta gammal data och ny data. 
Presentera data till frontenden?
Beslut-> Acceptera den nya data eller slänga den
OM data är accepterad, uppdatera databasen med ny information och statusen på ansökan till godkänd.
ANNARS släng den skiten
*/

exports.admin = async (req, res, next) => {

    // 
    const acceptedData = true // Req input
    /*const newUserData = { // Req input
        name: 'Varg Vikernes',
        birthDate: 197011124692,
        image: 'aske59vmsiegnosf0232gdfaf3fafggdsxxcz',
        signature: 'mgla015713bnvmn8fah0feaiofjea0n'
    } */ //

    try {
        // Hämtar ID på personen så att ansökan kan granskas || ID på ansökan istället?
        let personId = idLookUp();

        // Hämtar den gamla data som finns i databasen från personen med rätt ID
        let oldUserData = retrieveOldData(personId);

        //Hämtar den nya data som användaren skickade in från personen med rätt ID
        let newUserData = retrieveNewData(personId);

        //Presentera data till frontenden, vette fan om det ska skickas som JSON eller om funktionen fungerar korrekt.
        app.get('/admin', function(req, res, next) {
            res.json(newUserData, oldUserData);
          });

        // Kollar om admin har accepterat det nya körkortet(true) eller nekat(false)
        let applicationResult = applyResult(acceptedData);

        // Funktionen ska kolla om ansökan är godkänd eller ej. (Denna funktion kanske funkar så?) Innehållet är copy paste från applicationHandler.js
        if(!applicationResult === true) {
            const resp = await rejectedLicense()
            res.send(resp)
        }

        else {
            //Ladda upp det nya körkortet i databasen || Ersätta den gamla data?
            const resp = await acceptedLicense(newUserData)

            res.send(resp)
        }

    }
    catch(err) {
        console.log(err)
        const rejection = reject('unknown')
        res.status(rejection.status).send({ 
            success: false, 
            response: rejection.message
        })
    }
}