const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
const client=new MongoClient(path)
client.connect() //connection mongodb and node
console.log("connection success")
const olddata={mark:{$lt:90}}
const newdata={$set:{result:"fail"}}
const dbset=client.db(dbname).collection(colname).updateMany(olddata,newdata)
dbset.then((result)=>{
    console.log("successfully updated!!!!!")
})
}
catch{
    console.log("error!!!!!!")
}