const mongoose= require('mongoose')

const connectdb=(con) =>{
    return mongoose.connect(con).then(()=>{
        console.log("Connection successfully")
    }).catch((err)=>{
        console.log("db error:",err)
    })
}

module.exports=connectdb