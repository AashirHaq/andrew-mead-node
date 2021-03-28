const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(address){
    geocode.forward(address, (error, { placeName, lat, long }) => {

        if(error){
            return console.log(error)
        }

        forecast.current(lat, long, (error, { summery, temperature, feelsLike }) => {
    
            if(error){
                return console.log(error)
            }
    
            console.log(`LOCATION: ${placeName}`)
            console.log(`SUMMERY: ${summery}`)
            console.log(`DESCRIPTION: It is currently ${temperature} degree and feels like ${feelsLike} degree`)
        })
    })
}else{
    console.log('Please provide an address.')
}
