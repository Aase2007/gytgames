function creategrid(){
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




function checkBox(grid, row, col, num){
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

function checkline(grid, row, col, num){
  for(let i=0; i<9; i++){ //skjekker kollonnen
    if (grid[row][i]==num){
      return false
    }
  }
  for(let i=0; i<9; i++){ //skjekker raden
    if (grid[i][col]==num){
      return false
    }
  }
  return true
}

function createSolution(){
  let grid = creategrid()
  for (let i=0; i<9; i++){ //rad
    console.log(i, "rad!")
    let numbers = [1,2,3,4,5,6,7,8,9]
    for (let n=0; n<9; n++){ //kollone
      console.log(n, "kollonen")
      number = numbers[Math.floor(Math.random()*numbers.length)]
      if (checkBox(grid, i, n, number)){
        if (checkline(grid, i, n, number)){
          console.log(number)
          numbers.splice(numbers.indexOf(number),1)
          grid[i][n] = number
        } else{n--}
      }else{n--}
    }
  }
  console.log(grid)
}
createSolution()