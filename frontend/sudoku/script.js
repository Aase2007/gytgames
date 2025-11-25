



function showsudoku(sudoku){
  let sudokubox = document.getElementById("sudoku")
  for (let boxcol=0;boxcol<3;boxcol++){
    for (let boxrow=0;boxrow<3;boxrow++){
      let box = document.createElement("div")
      box.setAttribute("class", "sudokubox")
      for (let boxheigth=0;boxheigth<3;boxheigth++){
        for (let boxlength=0;boxlength<3;boxlength++){
          let text
          if (sudoku[boxrow*3+boxlength][boxcol*3+boxheigth] != 0){
            text = document.createElement("p");
            text.textContent = sudoku[boxrow*3+boxlength][boxcol*3+boxheigth];
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
showsudoku(sudoku)