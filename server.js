let express = require("express") 

server = express()
server.use( express.json() )
server.use(express.static("./client"))

server.get("/votes", (req, res) => {
    res.send(glasovi)
})
server.post("/vote", (req, res) => {
     let obj = req.body
     glasovi[obj.candidateId]=glasovi[obj.candidateId]+1;
     console.log(glasovi)
     res.send("OK")
})

let glasovi 
glasovi =[0, 0, 0, 0]

server.listen(4000)