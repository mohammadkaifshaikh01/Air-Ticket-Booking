const mongoose = require("mongoose")

const connect = async () =>{
   try {
      await mongoose.connect("mongodb://localhost:27017/Eval", {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
      console.log("Connected to MongoDB")
   }catch(error){
      console.log(error)
      process.exit(1)
   }
}
module.exports = connect