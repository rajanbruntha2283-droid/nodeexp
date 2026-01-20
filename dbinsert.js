const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
const client=new MongoClient(path)
client.connect() //connection mongodb and node
console.log("connection success")
const inp=[{sno:10,sname:'gopal',mark:70,result:"fail"},{sno:11,sname:'jana',mark:60,result:"fail"},{sno:12,sname:'abi',mark:40,result:"fail"},]
const dbset=client.db(dbname).collection(colname).insertMany(inp)
dbset.then((result)=>{
console.log("sucessfully inserted",result)
})
}
catch{
    console.log("error!!!!!!!!")
}