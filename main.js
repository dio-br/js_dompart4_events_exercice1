let monTitre = document.querySelector('h1')
console.log(monTitre);

//
// 2
// monTitre.setAttribute("style", "color:blue")

//3

let color = () => {
    monTitre.style.color = 'blue';
}
// 4

// color()

// 5

monTitre.addEventListener('click', color)




