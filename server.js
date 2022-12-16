//first 
const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()



// we will be writing all of or views using ejs
// view engine is going to convert that ejs code into html 
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {

   const articles = [{
       title: "Test Article",
       createdAt: new Date(),
       description: "Test description"
   },{
    title: "Test Article 2",
    createdAt: new Date(),
    description: "Test description"
}]
    // this use to be res.send("Hello World!") 
   res.render('index',{ articles: articles })
})


app.listen(5000)


