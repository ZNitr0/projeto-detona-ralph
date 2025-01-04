const state = {
     // visuais 
    view: {
        squares: document.querySelectorAll(".square"),
        enemy : document.querySelector(".enemy"),
        TimeLeft: document.querySelector("#time-left"),
        Score: document.querySelector("#score"),
    },

    //valores
    values: {
        Velocity: 1000,  
        hitposition: 0,
        result: 0,
        curretTime : 60,
    },

   //ações
   actions:{

     TimerId: setInterval(randomSquare,1000),
     countDownTimerId : setInterval(countDown, 1000),

   }

};

// função de audio
 function PlaySound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2,
    audio.play()
 }


// função do meu tempo
function countDown(){
    state.values.curretTime--;
    state.view.TimeLeft.textContent = state.values.curretTime

 if(state.values.curretTime < 0){
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.TimerId);
    alert("Game Over! O Seu Resultado Foi" + state.values.result);
 }
}

// função de movimentação do personagem 
 function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy")
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitposition = randomSquare.id;
}  


// função de contagens de hit|click do mouse   
 function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener("mousedown",() => {
        if(square.id === state.values.hitposition){
            state.values.result++;
            state.view.Score.textContent = state.values.result;
            state.values.hitposition = null;
            PlaySound();
        }
    });
   });

}


function init() {

    
    addListenerHitBox();
}


 init();   