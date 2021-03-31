//Version de l'exercice de faire une balise spoiler

// let clickHidden = true;
// let btn = document.querySelector("button");
// btn.addEventListener('click', spoiler);

// function spoiler () {
//     if (clickHidden == true) {
//         console.log("if");
//         document.querySelector("p").style.color = "white";
//         document.querySelector("button").textContent = "Afficher";
//         clickHidden = false;
//     }
//     else {
//         console.log("else");
//         document.querySelector("p").style.color = "black";
//         document.querySelector("button").textContent = "Cacher";
//         clickHidden = true;

//     }
// }

//correction

let btn     = document.querySelector("button");
let p       = document.querySelector('p');
let hidden  = true;

p.style.display = "none";
btn.addEventListener('click', () => {

    if(hidden) {
        btn.textContent = "Afficher";
        p.style.display = "block";
        hidden = false;
    }
    else {
        btn.textContent = "Cacher";
        p.style.display = "none";
        hidden = true;
    }
}

)
