
    // chiediamo i dati all'utente e li salviamo nelle variabili 
    
    var età = prompt("quanti anni ha?");
    var kmPercorso = prompt("quanti km vuole percorrere");

    // controllo dell'input 
    

    // calcolo per i prezzi 0.21€/km
    var prezzo = kmPercorso  * 0.21;

    console.log(prezzo);

    // applica uno sconto in base all'età dell'utente
    // 40% per i minorenni. 
    // 20% per gli over 65.

    var prezzoScontato = 0;  

    if ( età >= 18 && età <= 65 ){
        prezzoScontato = prezzo;
    } else if (età < 18){
        // sconto del 40%
    } else if (età > 65){
        // sconto del 20%
    }
    

    // output del programma

