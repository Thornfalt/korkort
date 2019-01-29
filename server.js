const express = require('express')
let app = express()
const { checkAuth } = require('./src/handlers/authHandler')
const { apply } = require('./src/handlers/applicationHandler')
const { admin } = require('./src/handlers/adminHandler')


app.route('/application').get(checkAuth, apply)
app.route('/application').post(checkAuth, apply)
app.route('/admin').get(checkAuth, admin)
app.route('/admin').post(checkAuth, admin)

app.listen(3000)
console.log("Ping 666 from port 3000")