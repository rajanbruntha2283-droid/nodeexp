const {MongoClient}=require("mongodb")
const path="mongodb://127.0.0.1:27017/"
const dbname="employee"
const colname="sdetails"
try{
const client=new MongoClient(path)
client.connect() //connection mongodb and node
console.log("connection success")
const inp={sno:5}
const dataset=client.db(dbname).collection(colname).find(inp).toArray()
dataset.then((result)=>{
    console.log(result)
})
}
catch{
    console.log("error!!!!!!")
}