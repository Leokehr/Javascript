// // --------COMMENT J'AI FAIS L'EXERCICE DEMANDE---------

// let secondes = 10;
// let test = "test";
// let interval;
// let btn = document.querySelector("button");
// btn.addEventListener('click',start);

// function decompte () {
//     var div = document.createElement("div");
//     div.textContent = secondes;
//     document.body.append(div);
 
//   secondes --
//  if (secondes == 0){
//    console.log("break");
//    stop();
//   }
// }

// function start () {
//   interval = setInterval(decompte, 1000);
// }

// function stop () {
//   console.log("Tu es dans la fonction stop")
//   var div1 = document.createElement("div");
//   div1.textContent = "STOP";
//   document.body.append(div1);
//   clearInterval(interval);
// }

//  console.log("endLine");

 //--------------- CORRECTION DE L'EXERCICE ------------
 //

let btn = document.querySelector("button");
let interval;
let secondes = 10;

btn.addEventListener('click', start);

function start() {
    interval = setInterval(decompte,1000);
}

function stop() {
    clearInterval(interval);
    document.body.innerHTML += "Stop !"
// "+="" Ca veut dire qu'on prend le contenue de la page et qu'on rajoute à la suite    
}
function decompte() {
    secondes--;
    if(secondes == 0){
        stop();
    }
    else {
        document.body.innerHTML += secondes + '<br>';
// Création toute simple de JUSTE mettre du texte HTML,
//rajouter la variable secondes histoire de l'imprimer,
// et de finir avec une balise break pour revenir à la ligne.        
    }
}

