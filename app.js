div = document.querySelectorAll(".block");

turn = 1
let x = []
let o = []

  div.forEach(element => {
    element.addEventListener('click', () => {
        if(turn % 2 != 0){
            element.innerHTML = `<div class="x"><img src="./svg/x.png" alt=""> </div> `
        
        }
        else{
            element.innerHTML = `<div class="o">O</div>`
        }
        turn++;
    })
});  



