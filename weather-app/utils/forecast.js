const request = require('request')

const current = (lat, long, callback) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d9b63082c4bf58e55ee82f60e66675f7&units=metric`

    request({
            url,
            json: true
        },
        (error, response) => {


            if(error){
                callback('Opps! Something went wrong.', undefined)
            }else if(response.body.cod == 200){
                const body = response.body
            
                // console.log(body.weather[0].description.toUpperCase() + '. It is currently ' + body.main.temp + ' degree and feels like ' +  body.main.feels_like + ' degree')

                const summery = body.weather[0].description.toUpperCase()
                const temperature = body.main.temp
                const feelsLike = body.main.feels_like

                callback(undefined, { summery, temperature, feelsLike })
            }else{
                callback('Unable to fetch data.', undefined)
            }
        }
    )
}

module.exports = { current }