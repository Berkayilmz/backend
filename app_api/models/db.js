const { mongo } = require('mongoose');
var mongoose=require( 'mongoose' );
var dbURI= 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" Adresine bağlanıldı.");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" Adresine bağlanılamadı.");
});
mongoose.connection.on("disconneted",function(){
    console.log(dbURI+" Bağlantı kesildi!");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Uygulma kapatıldı.");
    process.exit(0);
    
});