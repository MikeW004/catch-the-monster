const bodyElement = document.querySelector("body");
const btnTheme = document.querySelector("#theme");
const gameContainer = document.querySelector("#game-container");
const monster = document.querySelector("#monster");
const startBtn = document.querySelector("#btn-start-game");



btnTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
})

startBtn.addEventListener("click", () => {
    startGame();
})

// let slumpTal = Math.random() * 100;
// console.log(slumpTal);


function startGame(){
    //gör så att timern startar och man kan clicka på monstret
    monster.addEventListener("click", () => {

        const monsterPosition = monster.getBoundingClientRect();
        const gamePosition = gameContainer.getBoundingClientRect();
        let monsterPositionX = monsterPosition.left - gamePosition.left;
        let monsterPositionY = monsterPosition.top - gamePosition.top;
        // console.log(monsterPositionY)
        // console.log(monsterPositionX)
        //x-min = 0, x-max = 2(game-x)
        //y-min = 0, y-max = 2(game-y)

        const newX = Math.random() * (gamePosition.right - gamePosition.left);
        monsterPositionX = newX;
        monster.style.left = newX + "px";

        // const newY = Math.random() * gamePosition.bottom - gamePosition.top;
        // monsterPositionY = newY;
        // monster.style.top = newY + "px";
    })
}