const express = require('express')
const app = express()

app.use(express.json());
app.get('/', (req, res) => { //Line 9
  res.send("connected"); //Line 10
});
app.listen(3001,()=>{
    console.log(" started server")
})

