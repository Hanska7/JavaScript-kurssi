let Toiminta = document.getElementById('Lisääjä');
let Syöte = document.getElementById('Inputti');
let Kenttä = document.getElementById('Todo');
let kerta = 0

let alku = document.createElement('ul');
    Kenttä.appendChild(alku);



function aloitus() {

    let rivi = document.createElement('li');
    rivi.classList.add('task');

    alku.appendChild(rivi);
    rivi.innerText = Syöte.value;
    var pituus = rivi.innerText.length;

    rivi.setAttribute('id', työ+kerta);
    
    nappi = document.createElement('button');
    nappi.classList.add('delete');
    nappi.innerHTML = '<img src=roskis.png/>';

}

Toiminta.addEventListener('click', aloitus()); {};

function poistonappi() {



}

nappi.addEventListener('click', poistonappi()); {}



