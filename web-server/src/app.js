const path = require('path')
const express = require('express')
const hbs = require('hbs')

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

app.get('*', (req, res) => {
    res.render('errors/404', {
        message: 'Not found.',
        name: 'Aashir Haq'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})