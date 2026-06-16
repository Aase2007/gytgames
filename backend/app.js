const sudoku = require("./sudoku.js")
const express = require("express")
const app = express()
app.use(express.json());
const port = 3000;
let cors = require("cors")
app.use(cors())
const database = require('./dbconnector.js')

let sudokuvars = {"task": sudoku.globaltask, "sol": sudoku.globalsol}

app.get("/home", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/sudokutask", (req,res)=>{
  console.log("sudoku req")
  res.send(sudokuvars.task)
})

app.post("/sudokusolve", (req,res)=>{
  console.log("recived sudoku")
  let usr = req.body
  let usrsol = usr.sudoku
  let sol = sudokuvars.sol
  console.log(sol)
  console.log(usrsol)
  if (sol.every((element, index)=> element === usrsol[index])){
    console.log(true)
    res.send(true)
  } else {
    console.log(false)
    res.send(false)
  }
})
app.get("/sudoku", (req,res)=>{
  let sol = sudoku.globalsol
  res.send(sol)
})

app.post("/swiftleAnswer", async (req, res) => {
  let query = 'SELECT * FROM swiftle';
  try {
    console.log(req.body)
    let albumSongs = await database.query(query)
    const albumName = req.body.album_name
    const trackNumber = req.body.track_number
    let trackName = ''

    for (let i=0; i < albumSongs.length; i++) {
      if (albumSongs[i].album_name == albumName && albumSongs[i].track_number == trackNumber) {
        trackName = albumSongs[i].track_name
      } 
    }
    
    res.json(trackName)

  } catch (error) {
    console.log(error)
  }
})