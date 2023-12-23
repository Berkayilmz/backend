var mongoose=require('mongoose');
var dbURI= "mongodb+srv://berkay:123456By@mekanbul.ffwgfz1.mongodb.net/mekanbul";
//mongodb+srv://berkay:123456By@mekanbul.ffwgfz1.mongodb.net/mekanbul //vsrew
//mongodb+srv://mekanbul32:153456759By.@mekanbul.lexttaq.mongodb.net/mekanbul //brkylmz01

//GET venue and comment: localhost:3000/api/venues/6585e27d1da86c7985c99691/comments/6585e296de5f5700e164a725

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
    console.log("Uygulanma kapatıldı.");
    process.exit(0);
    
});
require("./venues.js");