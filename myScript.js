
// chiediamo i dati all'utente e li salviamo nelle variabili 
var eta = parseInt(prompt("quanti anni ha?"));
var kmPercorso = parseInt(prompt("quanti km vuole percorrere?"));

// controllo dell'input 
// che l'input siano numeri 
// isNaN restituisce true --> eta non è un numero 
// isNaN restituisce false --> eta è un numero  
if (Number.isNaN(eta)) {
    console.log("inserire dei numeri");

} else {
    // calcolo per i prezzi 0.21€/km
    var prezzo = kmPercorso * 0.21;

    console.log(prezzo);

    // applica uno sconto in base all'età dell'utente
    // 40% per i minorenni. 
    // 20% per gli over 65.
    // calcolo dello sconto con y = x - (x * %)

    var prezzoScontato = 0;

    // if ( età >= 18 && età <= 65 ){ (superfluo)
    //     prezzoScontato = prezzo;
    if (eta < 18) {
        // sconto del 40%
        prezzoScontato = prezzo - (prezzo * 40 / 100);
    } else if (eta > 65) {
        // sconto del 20%
        prezzoScontato = prezzo - (prezzo * 20 / 100);
    } else {
        prezzoScontato = prezzo;
    }
    
    // output del programma
    // to.Fixed(2) tronca l'output alla seconda cifra decimale 
    console.log("il prezzo scontato è di: " + prezzoScontato.toFixed(2));
}



