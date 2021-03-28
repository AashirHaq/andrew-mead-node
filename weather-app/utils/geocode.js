
const request = require('request')

// Forward Geocoding
// Address -> Lat/Long -> Weather
const forward = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWFzaGlydWxoYXF1ZSIsImEiOiJja210MWxveGcwbmpvMnBwZzNzbXUxeHNuIn0.jE5Ka6sqRd9kzeAF3qFlZQ`

    request({
            url,
            json: true
        },
        (error, { body }) => {
            if(error){
                callback('Opps! Something went wrong.', undefined)
            }else if(message = body.message){
                callback(message, undefined)
            }else if(body.features.length == 0) {
                callback('Unable to find location. Try another search.', undefined)
            }else{
                const feature = body.features[0]
                const placeName = feature.place_name
                const lat = feature.center[1]
                const long = feature.center[0]
                
                callback(undefined, { placeName, lat, long })
            }
        }
    )
}

module.exports = { forward }