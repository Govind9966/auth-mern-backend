const jwt=require('jsonwebtoken')
const usertable=require("../../../Models/usertable.js")
const bcrypt=require('bcryptjs');
const secretKey='12345678910'
const Register=async(req,res)=>{
    try {
        const{fullname,email,mobile,password}=req.body;

        const salt= await bcrypt.genSalt(10);
        const bcrypt_password= await bcrypt.hash(password,salt);

        const createuser= new usertable({
            fullname,
            email,
            mobile,
            password:bcrypt_password,
        });

        const response=await createuser.save();

        const token =jwt.sign({id:response.id},secretKey,{ expiresIn:'1h'});
        
        res.send({status:"Successful",data:response,token:token});
    } catch (error) {
        res.send({status:"failed",errors:error})
        console.log(`error:${error}`);
        
    }
}

module.exports=Register