
const usertable=require('../../../Models/usertable.js')

const Profile=async(req,res)=>{
    const userId=req.user.id;
    console.log("1234",userId)
    try{
        const userdetail= await usertable.findById(userId);
        if(!userdetail){
            return  res.status(404).send({error:'user detail not found'});

        }
        res.status(200).send({status:"successfully",data:userdetail});
       
          
    }catch(err){
        res.status(500).send({status:"failed",errors:errors.errors})
    }
}
module.exports=Profile