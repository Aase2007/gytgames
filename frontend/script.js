let carousel = document.getElementById("karusell")
let gameList = [{
    dic: "Swifte",
    imgSrc: "https://cdn2.penguin.com.au/covers/original/9780241723807.jpg",
    desc: "Gjett Taylor Swift sangen!"
},
{
    dic: "Sudoku",
    imgSrc: "https://www.svgrepo.com/show/519514/sudoku.svg",
    desc: "Spill daglig sudoku!"
},
{
    dic: "Puzzle",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/3209/3209952.png",
    desc: "Finn bildet!"
}];

for (let i=0; i<gameList.length; i++) {
    console.log()
    carousel.innerHTML += `<div class="carouselItem"><img class="carouselImg" alt="${gameList[i].dic} picture" src="${gameList[i].imgSrc}"><p class="carouselName">${gameList[i].dic}</p><p clss="carouselDescription">${gameList[i].desc}</p></div>`;
}

