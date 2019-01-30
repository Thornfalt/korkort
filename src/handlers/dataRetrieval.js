// Hämta personID från en ansökan för att hitta gamla data från personen för jämföran
// Skapa en lista på ansökan och ta första ID i kön?
exports.idLookUp = () => {
    console.log('Search the database for person ID')
    const personId = 2; // Tillfällig
    return personId
}

// Hämta den gamla data som finns i databasen med personID och returnera data
exports.retrieveOldData = (personId) => {
    console.log('Retrieve old userdata from the database')

    // Tillfällig data
    const oldUserData = { // Req input
        name: 'Varg Vikernes',
        birthDate: 197011124692,
        image: 'aske59vmsiegnosf0232gdfaf3fafggdsxxcz',
        signature: 'mgla015713bnvmn8fah0feaiofjea0n'
    }
    return oldUserData
}

// Hämta den nya data som finns i databasen med personID och returnera data
exports.retrieveNewData = (personId) => {
    console.log('Retrieve new userdata from the database')

    //Tillfällig data
    newUserData = { // Req input
        name: 'Varg Vikernes',
        birthDate: 197011124692,
        image: 'aske59vmsiegnosf0232gdfaf3fafggdsxxcz',
        signature: 'mgla015713bnvmn8fah0feaiofjea0n'
    }
    return newUserData
}
