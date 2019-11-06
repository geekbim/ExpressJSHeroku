const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const PORT = process.env.PORT || 8000
const users = require('./data.json')

app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home', {menu: 'home'})
})

app.get('/api/users', (req, res) => {
    // res.send('Hello World')
    res.json(users)
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})