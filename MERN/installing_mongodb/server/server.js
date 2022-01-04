const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(bodyParser.json())

var corsOptions = {
  origin : true
}

app.use(cors(corsOptions))

app.get('/',(req,res) => {
  res.send('Welcome to Express Server')
})

//import database connection 
const db = require('./models')
db.mongoose.connect(db.url,{

  useNewUrlParser: true,
  useUnifiedTopology:true

})
.then(()=>{
  console.log('Connect to Database!')
})
.catch(err =>{
  console.log('Cannot connect to Database',err)
  process.exit()
})

//routes
require('./routes/news.routes')(app)


const PORT = 5000;

app.listen(PORT,()=>{
  console.log(`Server has started at PORT ${PORT}`);
})