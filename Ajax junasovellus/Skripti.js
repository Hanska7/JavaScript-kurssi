
var kerta = 0
//Alustetaan muuttujat eli läpimenokerta

console.log('Start')

    var alku = document.createElement('div');
        
    alku.setAttribute('id', 'laatikko');
    
    alku.innerText = 'Tämä Appi hakee napin painalluksella listaan uuden junan päivämäärän nykyhetken kellonajan perusteella';
    
    document.body.appendChild(alku);

    var yksikkö = document.createElement('h1');
    yksikkö.setAttribute('id', 'otsikko');
    yksikkö.innerText = 'Tähän eka otsikko';
        
    alku.appendChild(yksikkö);

    var kaksikko = document.createElement('h2');
    kaksikko.setAttribute('id', 'kaksikko');
    kaksikko.innerText = 'Tähän toka otsikko';
        
    yksikkö.appendChild(kaksikko);
    

    var nappi = document.createElement('button');
    nappi.setAttribute('id', 'nappula');
    nappi.innerText = 'Paina uudestaan niin saat seuraavan junan!';

    var lista = document.createElement('ul');
    lista.innerText = 'Täältä tulee tietoa'

    var kenttä1 = document.createElement('input')
    kenttä1.value = 'Anna päivä'

    var kenttä2 = document.createElement('input')
    kenttä2.value = 'Anna kuukausi'

    var kenttä3 = document.createElement('input')
    kenttä3.value = 'Anna vuosi'

    kaksikko.appendChild(lista)

    var alalista = document.createElement('li');
    alalista.setAttribute('id', 'tulos');
    lista.appendChild(alalista);

//Luodaan HTML rakenne dynaamisesti


    lista.appendChild(kenttä1);
    lista.appendChild(kenttä2);
    lista.appendChild(kenttä3);
    
    lista.appendChild(nappi);

    document.getElementById('nappula').addEventListener('click', Avaa);
    
//Lisätään Avaa funktio nappiin dynaamisesti


console.log(localStorage)

Hakija()
//Ajetaan funktio Hakija joka luo uuden Divin johon tulee käsiteltävä raakateksti sivulta kun se on haettu

function Avaa() {

    console.log('Ovi auki')
    
    if (kerta > 0) {

    while (alalista.lastElementChild) {

        alalista.removeChild(alalista.lastElementChild)
        //Tyhjennetään edellinen haku listasta alta pois
    }}


    var numero = 0
    
    localStorage.setItem(0, kenttä1.value);
    localStorage.setItem(1, kenttä2.value);
    localStorage.setItem(2, kenttä3.value);
    //Haetaan syötetyt päivämäärän arvot
    
    var kohta = localStorage.getItem(numero);
    //Aloitetaan syötteen vertailu haluttuun

    console.log(kohta)
    console.log(kohta.length)
    var pituus = kohta.length
    console.log(pituus)

    if (pituus != 2) {
        alert('Anna päivä muodossa XX');
      } else {
        var kohta = localStorage.getItem(numero);
            
    
        var esine = document.createElement('li');
        esine.setAttribute('id', numero)
        console.log(esine)
    
        esine.innerText = (kohta);
        //Oikea syöte lisätään listaan

        alalista.appendChild(esine);
        var numero = numero+1
        console.log(numero)

      }

    
    if (numero == 1) {
    
        var kohta = localStorage.getItem(numero);
        console.log(kohta.length)
        var pituus = kohta.length
    
    

        if (pituus != 2) {            
                console.log(pituus)
                alert('Anna kuukausi muodossa XX');
           } else {
    
            var kohta = localStorage.getItem(numero);
            console.log(kohta)
    
    
            var esine = document.createElement('li');
            esine.setAttribute('id', numero)
            console.log(esine)
    
            esine.innerText = (kohta);
            //Oikea syöte lisätään listaan


            alalista.appendChild(esine);
            var numero = numero+1
            console.log(numero)
        }}
    
    
    if (numero == 2) {
    
            var kohta = localStorage.getItem(numero);
            console.log(kohta.length)
            var pituus = kohta.length
     
            if (pituus != 4) {   
                        console.log(pituus)
                        alert('Anna vuosi muodossa XXXX');
            }
    
            else {
    
                var kohta = localStorage.getItem(numero);
    
                var esine = document.createElement('li');
                esine.setAttribute('id', numero)
                console.log(esine)
    
                esine.innerText = (kohta);
                //Oikea syöte lisätään listaan
    
                alalista.appendChild(esine);
                var numero = numero+1
    
            }}
    
        
        console.log(numero)
    


        Lataa()
    
}
    
    


let sankari = new XMLHttpRequest();
// Ajax / Aias on Kreikan mytologian sankari

let päivä = localStorage.getItem(0);
let kuukausi = localStorage.getItem(1);
let vuosi = localStorage.getItem(2);
//Oikea syöte haetaan päivämääräksi


var pvm = (vuosi+"-"+kuukausi+"-"+päivä);
console.log(pvm);






var osoite = ("https://rata.digitraffic.fi/api/v1/schedules?departure_date="+pvm);
sankari.open("GET", osoite, true);
sankari.send();
//Ajax kutsu sivustolle päivämäärän mukaan



sankari.onreadystatechange = function() {
    if(sankari.readyState == 4 && sankari.status == 200) {
    // find myDiv and insert results there

    document.getElementById("myDiv").innerHTML = sankari.responseText;

    /* var vaste = document.getElementById("myDiv")
    vaste.innerHTML = sankari.responseText; */
    
} else if (sankari.readyState == 4 && sankari.status == 400) {
    alert('Huono päivämäärä, laita parempi')
    //Tarkistetaan väärän päivämäärän seuraukset
}}


var vaste = document.getElementById("myDiv").innerHTML
//Päivitetään uusi divi muokatulla tekstillä




function Lataa() {
//Ajetaan muokkaaja
    
    

        if (kerta == 0) {
        
        var teksti = sankari.responseText
        console.log('Eka kerta')
        //Otetaan raaka syöte ekalla kerralla

    }

        else { 
            
            var vaste = document.getElementById("myDiv").innerHTML
            
            teksti = vaste
            console.log('On tallennettu!')
            console.log(teksti)
            //Varmistetaan että muokattu syöte saadaan tulevaisuuteen
        }

    


        teksti = teksti.replaceAll("[", "")
        teksti = teksti.replaceAll("]", "")
        teksti = teksti.replaceAll("{", "")
        teksti = teksti.replaceAll("}", "")
        teksti = teksti.replaceAll('"', "")
        teksti = teksti.replaceAll(':', "")
        //Siistitään syötettä        

        var paikka = kerta+1
        console.log(paikka)


        /* teksti = teksti.replaceAll("trainNumber"+(paikka), "Junanumero-"+(paikka)) */
                
        /* teksti = teksti.replaceAll("trainNumber"+((paikka), "")) */

        //Aiempi versio haki junan junanumero kerrallaan syötteestä


        
        teksti = teksti.replaceAll("trainNumber", "Junanumero-")
        
        

        teksti = teksti.replaceAll(pvm, "")
        

        teksti = teksti.replaceAll("departureDate", "Lähtöpäivä-"+pvm)
        teksti = teksti.replaceAll("Lähtöpäivä-,,","Lähtöpäivä-"+pvm)
        teksti = teksti.replaceAll("Lähtöpäivä-", "Lähtöpäivä-"+pvm)

        teksti = teksti.replaceAll("trainType", "Junatyyppi-")
        teksti = teksti.replaceAll("trainCategory", "Junakategoria-")

        teksti = teksti.replaceAll('operatorUICCode10', "")
        teksti = teksti.replaceAll('operatorShortCodevr', "")



        teksti = teksti.replaceAll('commuterLineID', "")
        teksti = teksti.replaceAll('runningCurrentlyfalse', "")
        teksti = teksti.replaceAll('version', "")
        teksti = teksti.replaceAll('timetableTypeREGULAR', "")
        teksti = teksti.replaceAll('timetableAcceptanceDate', "")
        teksti = teksti.replaceAll('timeTableRows', "")
        
        teksti = teksti.replaceAll('stationShortCode', "ASEMA-")

        teksti = teksti.replaceAll('stationUICCode', "")
        teksti = teksti.replaceAll('countryCodeFI', "")
        
        teksti = teksti.replaceAll('typeDEPARTURE', "Lähtö")

        teksti = teksti.replaceAll('typeARRIVAL', "Saapuu")
        
        teksti = teksti.replaceAll('cancelledfalse', "Ei peruttu")
        teksti = teksti.replaceAll('cancelledtrue', "Peruttu")
        

        teksti = teksti.replaceAll('trainStoppingtrue', "Pysähtyy")

        teksti = teksti.replaceAll('trainStoppingfalse', "Ajaa ohi")



        
        teksti = teksti.replaceAll('commercialStoptrue', "")
        
        teksti = teksti.replaceAll('commercialTrack', "")

        teksti = teksti.replaceAll('scheduledTime', "Lähtöaika-")
        
        teksti = teksti.replaceAll('actualTime', "")

        teksti = teksti.replaceAll('differenceInMinutes', "")

        teksti = teksti.replaceAll('causes', "")

        teksti = teksti.replaceAll('undefined1', "")

        teksti = teksti.replaceAll('trainReadysource', "")

        teksti = teksti.replaceAll('acceptedtrue', "")

        teksti = teksti.replaceAll('timestamp', "")

        

        
        
        // replaceAll tai muuta suomeksi ja loppuun "-""
        // Poista myös Junanumero-kerta ekan replacen jälkeen
        
        //Poistetaan ylimääräisiä muuttujia
        




        //Haetaan nykyhetki
        var nykyHetki = new Date();
        
        nykyHetki.setHours(nykyHetki.getHours());
        
        nykyHetki.setUTCMinutes(nykyHetki.getMinutes());
        
        var tunnit = nykyHetki.getHours()
        if (tunnit < 10) {
            tunnit = "0" + tunnit;
        }
        
        var minuutit = nykyHetki.getMinutes()
        if (minuutit < 10) {
            minuutit = "0" + minuutit;
        }
        
        //Lisätään 0, jotta formaatti on oikein


        //Määritellään samaan järjestykseen datasta löytyvän päivämäärän kanssa
        var nyt = nykyHetki.getHours() + "/" + nykyHetki.getMinutes() + "/" + nykyHetki.getSeconds();
        
        
        var nytheti = nyt.replaceAll("/", "");

        
        nytheti = nytheti.substring(0,4)


        var haku = 'Lähtöaika-'+pvm+"T"+nytheti
        

        eka = haku.slice(0,10)
        toka = haku.slice(20)
        haku = eka.concat("", toka)

        console.log(haku)
        

        var etsi = teksti.search(haku)
        var teksti = teksti.substring(etsi)
        console.log('Löydetty nykyhetki kohdasta '+etsi)
        console.log(teksti)
        //Katkaistaan syöte heti alkuun nykyisen kellonajan kohdalta



        var ajoitus = teksti.substring(0, 27)
        var meno = ajoitus.slice(0, 10)
        var aika = ajoitus.slice(11, 15)
        var lähtöaika = meno.concat('', aika)
        

        
        
        document.getElementById("myDiv").innerHTML = teksti;
        //Näytetään tulevat junat syötteestä

        teksti = teksti.replaceAll("trainNumber", "Junanumero-")
        var etsi = teksti.search("Junanumero-")
        //Aloitetaan junan kohdalta

        console.log('Junan alku')
        console.log(etsi)

        
        var teksti = teksti.substring(etsi)
        var juna = teksti.substring(0, 16)
        

        var etsi = teksti.search('Lähtöpäivä-')
        var teksti = teksti.substring(etsi)
        var päivä = teksti.substring(0, 21)
        


        var etsi = teksti.search('Junatyyppi-')
        var teksti = teksti.substring(etsi)
        var tyyppi = teksti.substring(0, 13)

        
        var etsi = teksti.search('Junakategoria-')
        var teksti = teksti.substring(etsi)
        var kategoria = teksti.substring(0, 27)



        var etsi = teksti.search('Ei peruttu')
        var teksti = teksti.substring(etsi)
        var peruttu = teksti.substring(0, 10)



        /* var etsi = teksti.search('Peruttu')
        var teksti = teksti.substring(etsi)
        var peruttu = teksti.substring(0, 7) */



        var etsi = teksti.search('ASEMA-')
        var teksti = teksti.substring(etsi)
        var asema = teksti.substring(0, 9)


        var etsi = teksti.search('Lähtö')
        var teksti = teksti.substring(etsi)
        var lähtö = teksti.substring(0, 5)


        var etsi = teksti.search(haku)
        var teksti = teksti.substring(etsi)



        console.log('Leikkaa aika nyt')

        if (etsi == -1) {

            alert('Missattu lähtöaika, rakenne hajoaa')
            //Varmistetaan että syötteessä on juna joka vastaa minuutin tarkkuudella nykyhetkeä tai rakenne hajoaa

        }

        else {console.log('Hyvä lähtöaika, rakenne toimii')}
        //Nykyminuutille löytyy juna lähes aina


        var ajoitus = teksti.substring(0, 27)

        var meno = ajoitus.slice(0, 10)
        var aika = ajoitus.slice(11, 15)
        console.log(aika)


        var lähtöaika = meno.concat('', aika)

        console.log(lähtöaika)
        
        lähtöaika = lähtöaika.substring(0,12)+"."+lähtöaika.substring(12)
        console.log(lähtöaika)
        
        
        juna = juna.replaceAll(',', "")
        juna = juna.replaceAll("Läh","")
        juna = juna.replaceAll("A","")
        juna = juna.replaceAll("S","")
        juna = juna.replaceAll("E","")


        kategoria = kategoria.replaceAll('Ei peru', "")
        kategoria = kategoria.replaceAll(',', "")
        kategoria = kategoria.replaceAll('Ei', "")
        

        

        var löytö = juna+'\n'+päivä+'\n'+tyyppi+'\n'+kategoria+'\n'+peruttu+'\n'+asema+'\n'+lähtö+'\n'+lähtöaika
        
        var löytö= löytö.replaceAll(',', "")
        
        //Poistetaan ylimääräisiä merkkejä haetusta syötteestä

        /* teksti = teksti.replace(",,Junatyyppi-", "Junatyyppi-") */



        console.log("Tulos")
        console.log(etsi)
        console.log(löytö)
        console.log(teksti)

        console.log('Loppukohta')

        //Merkataan haku valmiiksi
    
        var esine2 = document.createElement('li');
        esine2.setAttribute('id', kerta)
        esine2.innerText = (löytö);
        alalista.appendChild(esine2);
        
        kerta = kerta + 1

        //Esitellään tulos
        
        


        var paikka = kerta+1

        console.log(juna)
        teksti = teksti.replaceAll(juna, "")
        var etsi = teksti.search("Junanumero-")


        var teksti = teksti.substring(etsi)

        console.log('Seuraavan alku')

        teksti = teksti.replaceAll(',,', ',')

        console.log('Tallennettu')
        console.log(teksti)
        document.getElementById("myDiv").innerHTML = teksti;

        //Esitellään syöte seuraavan junan kohdalta 
        
        


}



function Hakija() {

if (kerta == 0) {

var vaste = document.createElement('div');
vaste.setAttribute('id', 'myDiv');
vaste.innerText = 'Tähän tulee seuraava juna';

document.body.appendChild(vaste);
alert('Odota 10 sekuntia')
}

//Tämä funktio lataa ja näyttää tulosten alla käsiteltävän syötteen


    

};
    



