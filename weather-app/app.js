const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(address){
    geocode.forward(address, (error, geoData) => {

        if(error){
            return console.log(error)
        }
    
        const { placeName, lat, long } = geoData
        forecast.current(lat, long, (error, foreCastData) => {
    
            if(error){
                return console.log(error)
            }
    
            const { summery, temperature, feelsLike } = foreCastData
    
            console.log(`LOCATION: ${placeName}`)
            console.log(`SUMMERY: ${summery}`)
            console.log(`DESCRIPTION: It is currently ${temperature} degree and feels like ${feelsLike} degree`)
        })
    })
}else{
    console.log('Please provide an address.')
}
