
kerta = 0

document.onload = Divluoja();
console.log('Start')

function Divluoja() {

    var alku = document.createElement('div');
    /* var teksti = document.createTextNode('TÄMÄ ON KRIITTINEN OSA DIVIÄ') */
    
    alku.setAttribute('id', 'laatikko');
    
    alku.innerText = 'Divtekstiä';
    /* alku.appendChild(teksti); */

    document.body.appendChild(alku);

    var yksikkö = document.createElement('h1');
    yksikkö.setAttribute('id', 'otsikko');
    yksikkö.innerText = 'Tähän eka otsikko';
        
    alku.appendChild(yksikkö);

    var kaksikko = document.createElement('h2');
    kaksikko.setAttribute('id', 'kaksikko');
    kaksikko.innerText = 'Tähän toka otsikko';
        
    yksikkö.appendChild(kaksikko);

    nappi = document.createElement('button');
    nappi.setAttribute('id', 'nappula');
    nappi.innerText = 'Paina puuta';

    lista = document.createElement('ul');
    lista.innerText = 'Täältä tulee tietoa'


    
    kenttä1 = document.createElement('input')
    kenttä1.value = 'Anna päivä'

    kenttä2 = document.createElement('input')
    kenttä2.value = 'Anna kuukausi'

    kenttä3 = document.createElement('input')
    kenttä3.value = 'Anna vuosi'


    lista.appendChild(kenttä1);
    lista.appendChild(kenttä2);
    lista.appendChild(kenttä3);
    


    kaksikko.appendChild(lista)

    alalista = document.createElement('li');
    lista.appendChild(alalista);
    alalista.appendChild(nappi);

    document.getElementById('nappula').addEventListener('click', Avaa);
    
    



console.log(localStorage)

}

function Avaa() {

console.log('Ovi auki')


var numero = 0

localStorage.setItem(0, kenttä1.value);
localStorage.setItem(1, kenttä2.value);
localStorage.setItem(2, kenttä3.value);


for (let i = 0; i < 3; i++); {



    console.log(numero)
    
    
    var kohta = localStorage.getItem(numero);
    console.log(kohta)
    console.log(kohta.length)
    var pituus = kohta.length

    if (numero == 0); {
    

        if (pituus > 2); {

            alert('Anna päivä muodossa XX');

        

        var kohta = localStorage.getItem(numero);
        

        var esine = document.createElement('li');
        esine.setAttribute('id', numero)
        console.log(esine)

        esine.innerText = (kohta);

        alalista.appendChild(esine);
        var numero = numero+1

    }
    }



    if (numero == 1) {

        var kohta = localStorage.getItem(numero);
        console.log(kohta.length)
        var pituus = kohta.length

        if (pituus > 2); {
        
            alert('Anna kuukausi muodossa XX');
        
        }
        

        var kohta = localStorage.getItem(numero);
        console.log(kohta)


        var esine = document.createElement('li');
        esine.setAttribute('id', numero)
        console.log(esine)

        esine.innerText = (kohta);

        alalista.appendChild(esine);
        var numero = numero+1

    }


    if (numero == 2) {

        var kohta = localStorage.getItem(numero);
        console.log(kohta.length)
        var pituus = kohta.length

        if (pituus > 4); {
        
                console.log(kohta)
                alert('Anna vuosi muodossa XXXX');
        
            }


            var kohta = localStorage.getItem(numero);

            var esine = document.createElement('li');
            esine.setAttribute('id', numero)
            console.log(esine)

            esine.innerText = (kohta);

            alalista.appendChild(esine);
            var numero = numero+1

    }


    
    
    console.log(numero)

}

Hakija()

};

function Hakija() {

vaste = document.createElement('div');
vaste.setAttribute('id', 'myDiv');
document.body.appendChild(vaste);


    function Lataa() {

        let sankari = new XMLHttpRequest();

        let päivä = localStorage.getItem(0);
        let kuukausi = localStorage.getItem(1);
        let vuosi = localStorage.getItem(2);

        var pvm = (vuosi+"-"+kuukausi+"-"+päivä);
        console.log(pvm);

        var osoite = ("https://rata.digitraffic.fi/api/v1/schedules?departure_date="+pvm);

        sankari.open("GET", osoite, true);
        sankari.send();

        

        sankari.onreadystatechange = function() {
            if(sankari.readyState == 4 && sankari.status == 200) {
            // find myDiv and insert results there
            /* document.getElementById("myDiv").innerHTML = sankari.responseText; */
            console.log(sankari.responseText)

            }
        }


    function Lajittelija() {
        
    vuoro = document.createElement('li')
    vuoro.setAttribute('id', 'numero'+kerta);
    kerta = kerta+1

    vuoro.innerText = sankari.responseText;
    alalista.appendChild(vuoro);


    }

    Lajittelija()
    
}

Lataa()

}



/* localStorage.clear() */

;
    



