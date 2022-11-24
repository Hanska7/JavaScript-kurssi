
var kerta = 0


console.log('Start')

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

    var nappi = document.createElement('button');
    nappi.setAttribute('id', 'nappula');
    nappi.innerText = 'Paina puuta';

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




    lista.appendChild(kenttä1);
    lista.appendChild(kenttä2);
    lista.appendChild(kenttä3);
    
    lista.appendChild(nappi);

    document.getElementById('nappula').addEventListener('click', Avaa);
    

console.log(localStorage)


function Avaa() {

    console.log('Ovi auki')
    
    if (kerta > 0) {

    while (alalista.lastElementChild) {

        alalista.removeChild(alalista.lastElementChild)
    
    }}


    var numero = 0
    
    localStorage.setItem(0, kenttä1.value);
    localStorage.setItem(1, kenttä2.value);
    localStorage.setItem(2, kenttä3.value);
    
    
    var kohta = localStorage.getItem(numero);

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
    
                alalista.appendChild(esine);
                var numero = numero+1
    
            }}
    
        
        console.log(numero)
    


        Hakija()
    
}
    
    







function Lataa() {



    let sankari = new XMLHttpRequest();
    // Ajax / Aias on Kreikan mytologian sankari

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
        document.getElementById("myDiv").innerHTML = teksti;
        
        
        
        var teksti = sankari.responseText
        console.log('Eka kerta')
    
        


    




        teksti = teksti.replaceAll("[", "")
        teksti = teksti.replaceAll("]", "")
        teksti = teksti.replaceAll("{", "")
        teksti = teksti.replaceAll("}", "")
        teksti = teksti.replaceAll('"', "")
        teksti = teksti.replaceAll(':', "")
        

        var paikka = kerta+1
        console.log(paikka)



        teksti = teksti.replace("trainNumber"+(paikka), "Junanumero-"+(paikka))
                
        /* teksti = teksti.replaceAll("trainNumber"+((paikka), "")) */
        
        console.log(teksti)




        teksti = teksti.replaceAll("departureDate", "Lähtöpäivä-")

        

        teksti = teksti.replaceAll("trainType", "Junatyyppi-")
        teksti = teksti.replace("trainCategory", "Junakategoria-")

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

        

        teksti = teksti.replaceAll('trainStoppingtrue', "Pysähtyy")

        teksti = teksti.replaceAll('trainStoppingfalse', "Ajaa ohi")



        
        teksti = teksti.replaceAll('commercialStoptrue', "")
        
        teksti = teksti.replaceAll('commercialTrack', "")

        teksti = teksti.replaceAll('scheduledTime', "Lähtöaika-")
        
        teksti = teksti.replaceAll('actualTime', "")

        teksti = teksti.replaceAll('differenceInMinutes', "")

        teksti.replaceAll('causes', "")

        teksti.replaceAll('undefined1', "")

        teksti.replaceAll('trainReadysource', "")

        teksti.replaceAll('acceptedtrue', "")

        teksti.replaceAll('timestamp', "")

        

        
        
            // replaceAll tai muuta suomeksija loppuun -
            // Poista myös Junanumero-kerta ekan replacen jälkeen
        
        
        document.getElementById("myDiv").innerHTML = teksti;


        var etsi = teksti.search("Junanumero-"+paikka)
        var juna = teksti.substring(etsi, 12)
        var teksti = teksti.substring(etsi)
        

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


        var etsi = teksti.search('ASEMA-')
        var teksti = teksti.substring(etsi)
        var asema = teksti.substring(0, 9)


        var etsi = teksti.search('Lähtö')
        var teksti = teksti.substring(etsi)
        var lähtö = teksti.substring(0, 5)


        var etsi = teksti.search('Lähtöaika-')
        var teksti = teksti.substring(etsi)



        var ajoitus = teksti.substring(0, 27)

        var meno = ajoitus.slice(0, 10)
        var aika = ajoitus.slice(21)

        var lähtöaika = meno.concat('', aika)
        




        var löytö = juna+'\n'+päivä+'\n'+tyyppi+'\n'+kategoria+'\n'+peruttu+'\n'+asema+'\n'+lähtö+'\n'+lähtöaika

        


        /* teksti = teksti.replace(",,Junatyyppi-", "Junatyyppi-") */



        console.log("Tulos")
        console.log(etsi)
        console.log(löytö)
        
    
    


        alert('Odota 10 sekuntia')

        var esine2 = document.createElement('li');
        esine2.setAttribute('id', kerta)
        esine2.innerText = (löytö);
        alalista.appendChild(esine2);
        
        kerta = kerta + 1





        var paikka = kerta+1
        teksti = teksti.replace("trainNumber"+(paikka), "Junanumero-"+(paikka))
        var etsi = teksti.search("Junanumero-"+paikka)

        console.log(etsi)
        /* console.log(teksti) */

        var teksti = teksti.substring(etsi)
        console.log(teksti)


        console.log('Seuraava')
        



        
        } else if (sankari.readyState == 4 && sankari.status == 400) {
            alert('Huono päivämäärä, laita parempi')


        }


        
        

    }


}



function Hakija() {

if (kerta == 0) {

var vaste = document.createElement('div');
vaste.setAttribute('id', 'myDiv');
vaste.innerText = 'Divtekstiä2';

document.body.appendChild(vaste);
}



Lataa()
    

};
    



