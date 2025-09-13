div = document.querySelectorAll(".block");


div.forEach(element => {
    element.addEventListener('click', () => {
        element.innerHTML = `<div class="x"><img src="./svg/x.png" alt=""> </div> `
    })
});


