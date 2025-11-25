let globalsol = []

function creategrid(){ //lager en todimensjonal tom liste som sudokuløsningen skal ligge i
  let grid = [];
  for (let i=0; i<9; i++){
    let gridx = [];
    for(let n=0; n<9; n++){
      gridx.push(0)
    } 
    grid.push(gridx)
  }
  console.log(grid)
  return grid
}

function checkBox(grid, row, col, num){ //skjekker om verdien som puttes inn i en boks allerede finnes der
  let rowstart = Math.floor(row/3)*3
  let colstart = Math.floor(col/3)*3
  for(let i=0; i<3; i++){         //for hver rad
    for (let n=0; n<3; n++){      //for hver kollone
      if (grid[rowstart+n][colstart+i]==num){
        return false
      }
    }
  }
  return true
}

function checkrow(grid, row, num){ //skjekker om verdien som puttes inn i en rad allerede finnes der
  for(let i=0; i<9; i++){ //skjekker kollonen
    if (grid[row][i]==num){
      return false
    }
  }
  return true
}
function checkcol(grid, col, num){ //skjekker om verdien som puttes inn i en kollone allerede finnes der
  for(let i=0; i<9; i++){ //skjekker raden
    if (grid[i][col]==num){
      return false
    }
  }
  return true
}



function create(){ //lager en sudoku
  let grid = creategrid()
  for(let num = 1; num<10; num++){
    console.log(num, "tallet")
    let indexes = [0,1,2,3,4,5,6,7,8];
    let counter = 0 //skal holde styr på hvor mange ganger programmet har iterert gjennom samme rad
    for (let row = 0; row<9; row++){
      counter++ 
      if (counter>9){break} //hvis raden allerede har blitt skjekket 9 ganger betyr det at tallet ikke passer inn i raden, da fortsetter 0 å stå i den raden
      let index = Math.floor(Math.random()*indexes.length);
      if (grid[row][indexes[index]]==0){
        if(checkBox(grid,row,indexes[index],num) && checkcol(grid,indexes[index],num)){
          grid[row][indexes[index]] = num;
          indexes = [0,1,2,3,4,5,6,7,8]
          counter = 0
        } else{
          row--;
          indexes.splice(index,1)
        }
      } else{
        row--;
        indexes.splice(index,1)
      }
    }
  }
  console.log(grid)
  if (!checkgrid(grid)){create()} //hvis checkgrid() finner en 0 så kjører den funksjonen på nytt
  else{globalsol = grid} //da har checkgrid ikke funnet noen 0-er som betyr at denne løsningen er riktig at vi putter den da inn i variablen
}
function checkgrid(grid){ //skjekker om det er noen 0-ere i lista, 
  for (let i=0; i<9; i++){
    for(let n=0; n<9; n++){
      if(grid[i][n] == 0){return false} 
    } 
  } 
  return true
}
create()
function createsudoku(solution){
  console.log("lager sudoku...")
  let sudoku = structuredClone(solution)
  k = 50;
  while (k > 0){
    i = Math.floor(Math.random()*8);
    n = Math.floor(Math.random()*8)
    if (sudoku[i][n] != 0){
      sudoku[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)] = 0;
      k--
    }
  }
  return sudoku
}

let globaltask = createsudoku(globalsol);

module.exports = {globalsol, globaltask}