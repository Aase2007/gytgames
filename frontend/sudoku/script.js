function creategrid(){
  let grid = [];
  for (let i=0; i<9; i++){
    let gridx = [];
    for(let n=0; n<3; n++){
      let gridbox = []
      for(let k=0; k<3; k++){
        gridbox.push(0)
      }
      gridx.push(gridbox)
    } 
    grid.push(gridx)
  }
  console.log(grid)
  return grid
}
function createSolution(){
  let grid = creategrid()
}

function checkBox(row, col, num){
  let rowstart = Math.floor(row/3)*3
  let colstart = Math.floor(col/3)*3
  for(let i=0; i<3; i++){
    for (let n=0; n<3; i++){


    }
  }
}

createSolution()