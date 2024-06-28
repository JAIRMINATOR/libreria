console
const mongoose =require('mongoose');//instancia la libreria 
const url_bd ='mongodb://localhost:27017/libreria';//url de la base 

mongoose.connect(url_bd)//conectar la base
.then (()=> { //promesa
    console.log("si jalo")//el console muestra si jala o no
})
.catch ((err) => { //atrapa y muestra que no jalo
    console.log("no jalo")
})
//esquema pa la BD 
const esquema_libreria = new mongoose.Schema({name:{type:String},autor:{type:String},precio:{type:Number},editorial:{type:String},tipo:{type:String},año:{type:Number},existentes:{type:Number}})
//crear la collection 
const modelo_libreria =new mongoose.model('libros',esquema_libreria)
//crear datos 
modelo_libreria.create({name:'hasta mis ultimos dias',autor :'Daniel Krowitz',precio:"200",editorial:"mundo libro",tipo:"historia",año:"1990",existentes:"1000"})
