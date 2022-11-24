
//Alustetaan ID:t valmiille muutamalle HTML elementille
let Toiminta = document.getElementById('Lisääjä');
let Syöte = document.getElementById('Inputti');
let Kenttä = document.getElementById('Todo');
let alku = document.createElement('ul');

//Alustetaan laskurit Rivi ID kerta ja Rivi pituus Indeksi
let kerta = 0;
let indeksi = 0;


//Kiinnitetään lista Diviin jotta se näkyy
Kenttä.appendChild(alku);



//Kiinnitetään käynnistysnappiin funktio
Toiminta.addEventListener('click', käynnistys)


//Valmistellaan tyhjennysfunktio
function poistaja() {

    while (alku.firstChild) {
        alku.removeChild(alku.firstChild);
        console.log(alku.firstChild);

        }}



//Määritellään käynnistäjä joka tarkistaa että sana on yli 1 merkkiä pitkä
//Käynnistäjä luo listaelementin ja sen sisään poistonapit jolle määritellään poistofunktio
//Käynnistäjä luo myös yliviivausfunktion kun rivielementtiä painetaan

function käynnistys() {
    
    var pituus = Syöte.value.length;


    if (pituus < 2) {
        window.alert("Use more than one letter to express yourself <3");
        Syöte.style.border = "1px solid red";
        Syöte.value = "";
    }

    else {
    
    var rivi = document.createElement('li');
    let nappi = document.createElement('button');

    rivi.addEventListener('click', function() {
        rivi.style.textDecoration = "line-through";
        rivi.style.opacity = "0.5";
    
    })

    
    rivi.classList.add('task');
    rivi.innerText = Syöte.value;
    rivi.setAttribute('id', "työ"+kerta);
    

    let testi = rivi.id

    console.log(rivi.innerText);
    let näyte = rivi.innerText;
    console.log(näyte);

    let arvo = JSON.stringify(näyte);
    localStorage.setItem(indeksi, arvo);


    alku.appendChild(rivi);
    console.log(testi)

    nappi.classList.add('delete');
    nappi.innerHTML = '<img src="roskis.png"/>';
    rivi.appendChild(nappi)


//Tyhjennetään syöttökenttä ja poistetaan punainen väri jos tehtiin virhe ensin
    Syöte.style = "#Inputti";
    Syöte.value = "";

//Päivitetään ID ja listan pituus
    kerta = kerta+1
    indeksi = indeksi+1


//Poistonappi funktio poistaa koko rivin ja tallentaa rivin tekstin localStorageen
//Kun jotain poistetaan alkaa seuraava vaihe eli Päivitys funktion käynnistys

    function poistonappi() {

        let paluuarvo = rivi.innerText;
        let nimi = localStorage.setItem('ämpäri', paluuarvo);
        
        console.log('Seuraava on tyhjä')
        console.log(nimi)
        console.log(paluuarvo)
        
        console.log(nappi.parentElement);
        nappi.parentElement.remove();
        indeksi = indeksi-1

        päivitys()
    
    }




nappi.addEventListener('click', poistonappi); {


}}};


//Päivitysfunktio ottaa poistetun arvon localStoragesta
//Senjälkeen arvoa verrataan localStorageen tallentettuihin listassa tällä hetkellä oleviin arvoihin
//Kohdatessa poistettu arvo se poistetaan listan arvoista ja niiden perusteella rakennetaan varmistettu lista localStorageen
//Senjälkeen ajetaan uusinta funktio

function päivitys() {

            
    let varmistus = localStorage.getItem("ämpäri");
    
    /* varmistus = varmistus.substring(1, varmistus.length-1) */
    varmistus = '"'+varmistus+'"'
    
    for (let i = 0; i <= indeksi; i++) {
           
        console.log(i);

        let tarkistus = localStorage.getItem(i);

        if (tarkistus == null){

            console.log('Väärä');

        }
    
        else if (varmistus != tarkistus) {
                            
            console.log(varmistus);
            console.log(tarkistus);

            localStorage.setItem(i, tarkistus);
                     
        }
        
        else {

            console.log(varmistus);
            console.log(tarkistus);

            localStorage.removeItem(i);
               
        }       
    }
    

    /* localStorage.removeItem('ämpäri'); */
    console.log(localStorage.getItem('ämpäri'));

    kerta = 0


    console.log('Nyt uusinta');
    uusinta();

}


//Uusinnan alussa ajetaan poistaja joka tyhjentää ruudulla olevan listan kokonaan
//Uusintafunktio tekee ensin listan jolla täytetään ruudulla oleva lista localStoragen varmistetulla listalla
//Kohdatessa tyhjä avain se ohitetaan ja tulostetaan "Tyhjä"
//Jokaiselle listan arvolle luodaan uudestaan oma juokseva ID sekä uusi poistonappi funktion sisällä olevan poistofunktion avulla
//Looppia voi jatkaa niin kauan kunnes listan alkiot loppuvat painamalla aina uudestaan poistonappia
//Localstorage ja ruudun lista päivittyy joka painalluksella listaa vastaavaksi


function uusinta() {

        let täyttö = [];

        /* let alku = document.getElementsByTagName('ul'); */
    

        poistaja();
        

/*         let alku = document.createElement('ul');
        Kenttä.appendChild(alku);  */

        console.log(indeksi);

            for (let i = 0; i <= indeksi; i++) {
        
                let nappaus = localStorage.getItem(i);
                console.log(nappaus);
        
                if (nappaus == null) 
                    console.log('Tyhjä')
                            
                
                        

                else {

                    console.log(i)

                    täyttö.push(nappaus)
                          
                    var rivi = document.createElement('li');

                    rivi.setAttribute('id', "työ"+kerta);
                    rivi.classList.add("task");


                    nappaus = nappaus.substring(1, nappaus.length-1)
                    rivi.innerText = nappaus;

                   
                    let nappi = document.createElement('button');
                    

                   
                    alku.appendChild(rivi);
                    console.log(alku)


                    nappi.classList.add('delete');
                    nappi.innerHTML = '<img src="roskis.png"/>';
                    rivi.appendChild(nappi)

                    Syöte.style = "#Inputti";
                    Syöte.value = "";

                    kerta = kerta+1
                    indeksi = indeksi+1


                    function poistonappi() {

                        let paluuarvo = rivi.innerText;
                        let nimi = localStorage.setItem('ämpäri', paluuarvo);
                        
                        console.log('Seuraava on tyhjä')
                        console.log(nimi)
                        console.log(paluuarvo)
                        
                        console.log(nappi.parentElement);
                        nappi.parentElement.remove();
                        indeksi = indeksi-1
                                                
                        päivitys()
                    
                    }

                    nappi.addEventListener('click', poistonappi); {

                    }}        

                

}};
        
                    
        
                







                
