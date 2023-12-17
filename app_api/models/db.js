var mongoose=require('mongoose');
var dbURI= "mongodb+srv://mekanbul32:sifre@mekanbul.lexttaq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" Adresine bağlanıldı.");
});
mongoose.connection.on("error",function(){
    console.log(dbURI+" Adresine bağlanılamadı.");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" Bağlantı kesildi!");
});
process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Uygulanpma kapatıldı.");
    process.exit(0);
    
});
require("./venues.js");