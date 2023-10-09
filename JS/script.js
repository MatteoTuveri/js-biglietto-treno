//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km(0.21 € al km)
//va applicato uno sconto del 20 % per i minorenni
//va applicato uno sconto del 40 % per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana 
//(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const kmPrice = 0.21;

let km = parseInt(prompt('Inserire numero di kilometri da percorrere'));
console.log(km);

let age = parseInt(prompt('Inserire numero di età'));
console.log(age);

let baseprice = parseFloat(kmPrice * km).toFixed(2);
console.log(baseprice);


if(isNaN(km) || isNaN(age) || km<0 || age<0){

    document.getElementById("demo").innerHTML = 'Inserire solo valori numerici positivi';

}
else if (age<18){

    let newprice = parseFloat(baseprice *(1 - 0.2)).toFixed(2);
    console.log(newprice);
    document.getElementById("demo").innerHTML = newprice + ' €';

}
else if (age>65){

    let newprice = parseFloat(baseprice *(1 - 0.4)).toFixed(2);
    console.log(newprice);
    document.getElementById("demo").innerHTML = newprice + ' €';

}
else{
    document.getElementById("demo").innerHTML = baseprice + ' €';
}
