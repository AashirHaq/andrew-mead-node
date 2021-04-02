const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define path for express config
const publicDirPth = path.join(__dirname, '../public')
const partialPath = path.join(__dirname, '../views/partials')

// Setup handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirPth))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Aashir Haq'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Aashir Haq'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Aashir Haq'
    })
})

app.get('/weather', (req, res) => {
    
    const address = req.query.address

    if(!address){
        return res.send({
            message: 'Please provide address.' 
        })
    }

    geocode.forward(address, (error, { placeName, lat, long } = {}) => {
        
        if(error){
            return res.send({ error })
        }

        forecast.current(lat, long, (error, { summery, temperature, feelsLike } = {}) => {
    
            if(error){
                return res.send({ error })
            }

            res.send({
                forecast: `It is currently ${temperature} degree and feels like ${feelsLike} degree`,
                location: placeName,
                summery,
                address,
            })
        })
    })
})

app.get('*', (req, res) => {
    res.render('errors/404', {
        message: 'Not found.',
        name: 'Aashir Haq'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})