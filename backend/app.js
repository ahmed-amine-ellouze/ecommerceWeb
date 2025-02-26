const express=require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const categorieRouter=require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");

dotenv.config();
//middleware
app.use(express.json());
app.get("/", (req, res) => {
    res.send("bienvenue dans notre site web ")
})
app.use("/api/categories",categorieRouter)
app.use("/api/scategories",scategorieRouter)
app.use("/api/article",articleRouter)

app.listen(process.env.PORT)
console.log("application run at port "+process.env.PORT);
//connexion a la base de donne 
mongoose.connect(process.env.DATABASECLOUD,{
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
})
.then(()=>{console.log("connexion a la base donne avec succes ")
}).catch(err=>{
    console.log("impossible de se connecte a la base donne ")
    process.exit();

});
module.exports = app; 