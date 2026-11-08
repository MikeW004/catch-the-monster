const bodyElement = document.querySelector("body");
const btnTheme = document.querySelector("#theme");
const gameContainer = document.querySelector("#game-container");
const tutorialText = document.querySelector("#how-to-play");
const monster = document.querySelector("#monster");
const startBtn = document.querySelector("#btn-start-game");
const timeElement = document.querySelector("#time");
const pointsElement = document.querySelector("#points");
let time = 0;
let points = 0;
//BYT MONSTER TILL BRUN SIMPEL GROUND POKEMON
//borde gå att göra flappybird med det här no?

btnTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
})

startBtn.addEventListener("click", () => {
    tutorialText.classList.add("hidden");
    time = 15;
    startGame();
})

// let slumpTal = Math.random() * 100;
// console.log(slumpTal);


function startGame(){
    //gör så att timern startar och man kan clicka på monstret
    points = 0;
    pointsElement.textContent = points;
   const timer = setInterval(() => {

    time--;
    timeElement.textContent = time;
    if(time <= 0){
        clearInterval(timer);
        
    }
   }, 1000) 
   monsterListener();

}
function monsterListener(){
    
    monster.addEventListener("click", () => {
    if(time > 0){
        points++;
        pointsElement.textContent = points;
        const monsterPosition = monster.getBoundingClientRect(); 
        const gamePosition = gameContainer.getBoundingClientRect();
        
        //längden på max-avståndet från vänstra väggen och taket till vänstra sidan och toppen av monstret
        const monsterLeftMaxPosition = gamePosition.right - gamePosition.left - monsterPosition.width - 10;//inte /2 eftersom postition räknas från vänstra sidan
        const monsterTopMaxPosition = gamePosition.bottom - gamePosition.top - monsterPosition.height -10;

        //ny position från vänstra väggen och taket till max-avståndet
        const newPositionX = Math.random() * monsterLeftMaxPosition; //0-max
        const newPositionY = Math.random() * monsterTopMaxPosition; //0-max

        
        monster.style.left = newPositionX + "px";
        monster.style.top = newPositionY + "px";
    }else{
        console.log("start game pls")
    }
    

});
    

    
}