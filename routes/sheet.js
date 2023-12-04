const {Router} = require("express");
const {google} = require('googleapis')
require('dotenv').config()

const sheet = Router()

const client = new google.auth.GoogleAuth({
    credentials: {
        type: process.env.type,
        project_id: process.env.project_id,
        private_key_id: process.env.private_key_id,
        private_key: process.env.private_key.replace(/(\\r)|(\\n)/g, '\n'),
        client_email: process.env.client_email,
        client_id: process.env.client_id,
        auth_uri: process.env.auth_uri,
        token_uri: process.env.token_uri,
        auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
        client_x509_cert_url: process.env.client_x509_cert_url,
        universe_domain: process.env.universe_domain
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
})


sheet.get('/', (req, res) => {
    res.send('hi ')
})

sheet.get('/sheet', async(req, res) => {
    const auth = await client.getClient()
    const sheet = google.sheets({ version: "v4", auth: auth})

    const response = await sheet.spreadsheets.values.get({
        spreadsheetId: "1kY8JGlET7BGl7vPAeseJjiv9xyo2cJT9ZD8Bq0TGfF4",
        range: "Sheet1"
    })

    res.send(response.data.values)
})



module.exports = sheet