const dotenv=require('dotenv')
let MyEnviroment={}
if(process.env.NODE_ENV ==='testing'){
MyEnviroment =dotenv.config({path:`${__dirname}/../Application-Configuration-Test.env`});
}
console.log(MyEnviroment)