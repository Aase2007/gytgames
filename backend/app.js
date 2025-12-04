const sudoku = require("./sudoku.js")
const express = require("express")
const app = express()
app.use(express.json());
const port = 3000;
let cors = require("cors")
app.use(cors())
const database = require('./dbconnector.js')

app.get("/home", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/sudokutask", (req,res)=>{
  let task = sudoku.globaltask
  res.send(task)
})

app.post("/sudokusolve", (req,res)=>{
  let usrsol = req.body
  let sol = sudoku.globalsol
  if (usrsol==sol){
    res.send(true)
  } else {
    res.send(false)
  }
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