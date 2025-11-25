const sudoku = require("./sudoku.js")
const express = require("express")
const app = express()
app.use(express.json());
const port = 3000;

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