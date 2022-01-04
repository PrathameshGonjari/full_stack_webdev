const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
  res.send('Welcome to Express Server')
})

const PORT = 5000;
app.listen(PORT,()=>{
  console.log(`Sever started at port ${PORT}`)
})
//static routes
app.get('/about',(req,res)=>{
  res.send('<h1>Welcome to About Page</h1>')
})
//dynamic routes
app.get('/users/:id',(req,res)=>{
  const id = req.params.id
  res.send(`<h1>Welcome user ${id}</h1>`)
})
//controller routes
const controller = require('./controllers/controller')
app.get('/products',controller.products)
//404 routes
app.use(function(req,res,next){
  res.status(404).send(`<h1>Sorry! Page Not Found !</h1>`)
})