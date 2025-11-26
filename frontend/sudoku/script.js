
const API_URL = "http://localhost:3000"

async function getsudoku(){
  const res = await fetch(API_URL + "/sudokutask");
  const sudoku = await res.json();
  return sudoku
}

function showsudoku(sudoku){
  let sudokubox = document.getElementById("sudoku")
  for (let boxcol=0;boxcol<3;boxcol++){
    for (let boxrow=0;boxrow<3;boxrow++){
      let box = document.createElement("div")
      box.setAttribute("class", "sudokubox")
      for (let boxheight=0;boxheight<3;boxheight++){
        for (let boxlength=0;boxlength<3;boxlength++){ //her er ting feil!
          let text
          if (sudoku[boxrow*3+boxheight][boxcol*3+boxlength] != 0){
            text = document.createElement("p");
            text.textContent = sudoku[boxrow*3+boxheight][boxcol*3+boxlength];
          } else{
            text = document.createElement("input")
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
