
const API_URL = "http://localhost:3000"
let sudoku

async function getsudoku(){
  const res = await fetch(API_URL + "/sudokutask");
  sudoku = await res.json();
  return sudoku
}

function showsudoku(sudoku){
  let sudokubox = document.getElementById("sudoku");
  for (let boxcol=0;boxcol<3;boxcol++){
    for (let boxrow=0;boxrow<3;boxrow++){
      let box = document.createElement("div")
      box.setAttribute("class", "sudokubox")
      for (let boxheight=0;boxheight<3;boxheight++){
        for (let boxlength=0;boxlength<3;boxlength++){ 
          let text
          if (sudoku[boxcol*3+boxheight][boxrow*3+boxlength] != 0){
            text = document.createElement("p");
            text.textContent = sudoku[boxcol*3+boxheight][boxrow*3+boxlength];
          } else{
            text = document.createElement("input")
            text.setAttribute("id", `${boxcol*3+boxheight}${boxrow*3+boxlength}`)
          }
          text.setAttribute("class", "sudokutile")
          box.append(text)
        }
      }
      sudokubox.append(box)
    }
  }
}
getsudoku().then((result) =>{
  showsudoku(result)
})

let submit = document.createElement("button");
submit.addEventListener("click", submitfunc);
submit.innerText = "Submit"
document.getElementById("sudokucontainer").append(submit)
console.log(submit)

function findsolvetry(){
  let solvetry = []
  for (let row = 0;row<9; row++){
    let rowtoappend = []
    for (let tile = 0;tile<9; tile++){
      if (sudoku[row][tile]==0){
        rowtoappend.push(parseInt(document.getElementById(`${row}${tile}`).value))
      } else {
        rowtoappend.push(sudoku[row][tile])
      }
    }
    solvetry.push(rowtoappend)
  }
  return solvetry
}

function submitfunc(){
  console.log("hei")
  let solvetry = findsolvetry()
  console.log(solvetry)
  let submitbundle = {
    "sudoku": solvetry
  };
  fetch(API_URL + "/sudokusolve", {
    method: "POST",
    body: JSON.stringify(submitbundle),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(function(response){
    console.log("yipee")
    return response
  }).then(function(data){
    console.log(data)
  })
}
