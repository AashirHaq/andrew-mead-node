const https = require('https')

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/karachi.json?access_token=pk.eyJ1IjoiYWFzaGlydWxoYXF1ZSIsImEiOiJja210MWxveGcwbmpvMnBwZzNzbXUxeHNuIn0.jE5Ka6sqRd9kzeAF3qFlZQ`

 const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()