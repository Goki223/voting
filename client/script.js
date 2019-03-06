async function vote (voteFor) {
    await axios.post("/vote", {
        candidateId: voteFor,
        increase: true,
        
    } )
     zemiGlasovi()
}

async function zemiGlasovi() {
    let response = await axios.get("/votes")
    let glasovi = response.data
    document.getElementById("kan1").innerHTML = glasovi[0]
    document.getElementById("kan2").innerHTML = glasovi[1]
    document.getElementById("kan3").innerHTML = glasovi[2]
    document.getElementById("kan4").innerHTML = glasovi[3]
}

setInterval(zemiGlasovi, 100)
