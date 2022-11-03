// BLOCK START DEPENDENCIES
const express= require ('express')
const myvariable=require('./configuration/myvariable')
const cors= require('cors')
// BLOCK end DEPENDENCIES

// BLOCK START INITLIZATION
const app=express()
app.use(express.urlencoded ({extended:true}))


const PORT=process.env.PORT
// BLOCK End INITLIZ
  


// //Start Block Setting th Headers for your Application
app.all('*', (req, res, next)=>{
console.log(req.body)
// protect api
res.header('Access-Control-Allow-Origin','*')
})






//Start Block For Listening Your App On Defined Port
app.listen(PORT,()=>{
console.log('your port is ${PORT}')
console.log(process.env)
})
