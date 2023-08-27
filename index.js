
const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

const h1El = document.querySelector("h1");

const h2El = document.querySelector("h2");



inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

function updateBody(){
    if (inputEl.checked){

        bodyEl.style.background = "black";
        h1El.style.color = "black";
        h2El.style.color = "white";
        
        
        
    }else{
        
        bodyEl.style.background = "white";
        h1El.style.color = "black";
        
        h2El.style.color = "white";
        
        
    }
}

inputEl.addEventListener("input", () => { updateBody();
                                        updateLocaStorage()


})

function updateLocaStorage(){
    localStorage.setItem("mode", JSON-stringify(inputEl.checked));
}