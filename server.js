//first 
const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


// we will be writing all of or views using ejs
// view engine is going to convert that ejs code into html 
app.set('view engine', 'ejs')

app.use(articleRouter)

app.get('/', (req, res) => {


    // this use to be res.send("Hello World!") 

   res.render('index')
})


app.listen(5000)


