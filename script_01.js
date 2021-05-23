
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
<<<<<<< HEAD
1. Dateneingabe + -überprüfung :: 
<<<<<<< HEAD
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
<<<<<<< HEAD
4. Ausgabe in Konsole :: check 
*/



ausgabe (subtrahieren(2,1));
function subtrahieren(a,b) {
    
    return a,b;
}


//ausgabe (addieren(1,2));
=======
1. Dateneingabe + -überprüfung :: check!
2. Auswahl Rechenart :: check!
=======
2. Auswahl Rechenart :: check
>>>>>>> 63bafd430a27f7023ceaef1dbdfd857389072219
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

<<<<<<< HEAD
// Gesamte Applikation:
start();
function start() {
    ausgabe(rechner(getZahl("1"),getOp(),getZahl("2")))
}

// Modul: Zahl eingeben | Test:
// ausgabe(getZahl("1"));
// ausgabe(getZahl("2"));
function getZahl(numStr) {
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + " eingeben."))
    while (isNaN(zahl)){
        zahl = parseInt(prompt("Das ist keine Zahl. Bitte nochmal:"));
    }
    return zahl;     
}

// Modul: Operand eingeben | Test:
//ausgabe(getOp());
function getOp() {
  let op = prompt("Bitte + | - | * | / eingeben.")
  while (!isOpValid(op)) { // solange falsche eingabe --> schleife
      op = prompt("Bitte einen korrekten Operator eingeben!")
  }
    return op ; 
}

// Modul: Operand überprüfen | Test:
// ausgabe(isOpValid("+"));
// ausgabe(isOpValid("-"));
// ausgabe(isOpValid("*"));
// ausgabe(isOpValid("/"));
// ausgabe(isOpValid("#"));
// ausgabe(isOpValid(""));
// ausgabe(isOpValid());
function isOpValid(op) {
    
    /*
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
    */

    return op == "+" || op == "-" || op == "*" || op == "/";
    
}

// Modul: Rechenart auswählen | Tests:
// ausgabe(rechner("+",10,4));
// ausgabe(rechner("-",10,4));
// ausgabe(rechner("*",10,4));
// ausgabe(rechner("/",10,4));
// ausgabe(rechner("/",10,0));
// ausgabe(rechner("#?!",10,0));
function rechner(a,op,b) {
    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "Irgendwas ging schief!"
    }
}

// Modul: Division a / b |  Test:
// ausgabe(dividieren(2,2));
// ausgabe(dividieren(0,5));
// ausgabe(dividieren(5,0));
function dividieren(a,b) {
    if(b!=0){
        return a / b;
    } 
    return "Divison durch 0 nicht OK!";
}

// Modul: Multiplikation a * b |  Test:
// ausgabe(multiplizieren(2,2));
// ausgabe(multiplizieren(0,2));
=======
ausgabe(rechner(getop(),10,4));

// Modul: Operand eingeben | Text
//ausgabe(getop());
function getop() {
    let op = prompt("Bitte + |- |* |/ eingeben.")
 
 if (isOpValid(op)) {
     return op;
 } else {
     return"Bitte nochmahl!"
 }
 
 
    return op; 
}

function isOPValid(checkStr) {
    return false;
}



// Modul: Rechenart auswählen | Test
//ausgabe(rechner("+",10,4));
//ausgabe(rechner("-",10,4));
//ausgabe(rechner("*",10,4));
//ausgabe(rechner("/",10,4));
//ausgabe(rechner("/",10,0));
//ausgabe(rechner("#?!",10,0));



function rechner(op,a,b) {

switch (op) {
    case "+":
        return addieren(a,b);
    case "-":
        return subtrahieren(a,b);
    case "*":
        return multiplizieren(a,b);
    case "/":
        return dividieren(a,b);            

    default:
        return "irgendwas ging schief!"
}



return addieren(a,b);
//return multiplizieren(2,2);    
}



// Modul: Division a / b | Test
//ausgabe(dividieren(2,2));
//ausgabe(dividieren(0,5));
//ausgabe(dividieren(5,0));
function dividieren(a,b) {
    if(b==0){  // wenn b =0 dann Fehlermeldung
        return("Dividieren durch 0 nicht möglich!");
    }

        return a/b;
    }



// Modul: Multiplikation a * b |  Test:
//ausgabe(multiplizieren(2,2));
//ausgabe(multiplizieren(0,2));
>>>>>>> 63bafd430a27f7023ceaef1dbdfd857389072219
function multiplizieren(a,b) {
    return a * b;
}

// Modul: Subtraktion a - b |  Test:
// ausgabe(subtrahieren(2,1));
// ausgabe(subtrahieren(2,10));
function subtrahieren(a,b) {
   return a - b; 
}

// Modul: Addition a + b |  Test:
//ausgabe(addieren(2,1));
>>>>>>> a107e378ecb5f26040f1130fb38356ebdc9a3428
function addieren(a,b) {
      return a + b;
}



// Modul: Konsolenausgabe | Test
//ausgabe("Hallo Welt");
//ausgabe(20);
function ausgabe(outputStr) {
<<<<<<< HEAD
console.log(outputStr);
=======

    if (typeof outputStr === "number"){
        outputStr = "Das Ergebnis ist: " + outputStr;
    }
    
    console.log(outputStr);
}
>>>>>>> a107e378ecb5f26040f1130fb38356ebdc9a3428
