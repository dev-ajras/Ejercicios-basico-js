// 1- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
//alert("Hello World");

// 2-Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
//document.write("hello world");

// 3-Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
 //document.write(3 + 5);

// 4-Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
/*let nombre= prompt ("cual es tu nombre?");
document.write(`Hola ${nombre}`);*/


// 5-Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/*let firstNumber =  parseInt (prompt ("cual es el primer numero?"));
let secondNumber = parseInt (prompt ("cual es el segundo numero?"));

document.write (firstNumber + secondNumber)*/


// 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/*let firstNumber = parseInt (prompt ("cual es el primer numero?"));
let secondNumber = parseInt (prompt("cual es el segundo numero?"));
if (firstNumber > secondNumber){
    document.write (firstNumber)
} else {
    document.write (secondNumber)
}*/


// 7- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*let firstNumber = parseInt(prompt("cuales el primer numero?"));
let secondNumber = parseInt (prompt("cual es el segundo numero?"));
let thirthNumber = parseInt (prompt("cual es el tercer numero?"));
if (firstNumber > secondNumber && firstNumber > thirthNumber){
    document.write (firstNumber)
}
if (secondNumber > firstNumber && secondNumber > thirthNumber){
    document.write(secondNumber)
}
if (thirthNumber > firstNumber && thirthNumber> firstNumber){
    document.write(thirthNumber)
}*/

// 8- Escribe un programa que pida un número y diga si es divisible por 2
/*let number= parseInt (prompt("que numero vas a dividir por 2?"));
resultado = number / 2;
document.write (resultado)*/


// 9- Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

/*let showMeWordA = ()=>{
    let cadena= prompt ("dime tu frase");
    let indices = [];
    for (let i=0; i< cadena.length;i++){
        if (cadena[i].toLowerCase () === "a"){
            indices.push (i);
        }
    
    }
    document.write (indices.length)
}
showMeWordA()*/




// 10- Escribe un programa que pida una frase y escriba las vocales que aparecen

/*let showMeWordA = ()=>{
    let frase= prompt ("dime tu frase");
    let showMeA = ""
    let showMeE = ""
    let showMeI = ""
    let showMeO = ""
    let showMeU = ""
    for (let i=0; i< frase.length;i++){
        if (frase[i].toLowerCase () === "a"){
            showMeA = "a"
        }else if(frase[i].toLowerCase () === "e"){
            showMeE ="e"
        }else if(frase[i].toLowerCase () === "i"){
            showMeI = "i"
        }else if(frase[i].toLowerCase () === "o"){
            showMeO = "o"
        }else if(frase[i].toLowerCase () === "u"){
            showMeU = "u"
        }
        }
        return `Tu frase: ${frase} tiene las vocales ${showMeA} ${showMeE} ${showMeI} ${showMeO} ${showMeU}`
    }
document.write(showMeWordA())/*

// 11- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

/*let countVowels= ()=>{
    let frase= prompt ("dime tu frase");
    const vowels = "aeiouAEIOUáéíóúÁÉÍÓÚ";
    let numberVowels = 0;
    for(let i=0; i< frase.length ;i++){
        if( vowels.indexOf(frase[i]) !== -1){
            numberVowels++;
        }

    }
    return numberVowels;
}

document.write(countVowels())*/

// 12- Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

    /*let showMeWordA = ()=>{
        let frase= prompt ("dime tu frase");
        let showMeA = 0
        let showMeE = 0
        let showMeI = 0
        let showMeO = 0
        let showMeU = 0
        for (let i=0; i< frase.length;i++){
            if (frase[i].toLowerCase () === "a"){
                showMeA++
            }else if(frase[i].toLowerCase () === "e"){
                showMeE++
            }else if(frase[i].toLowerCase () === "i"){
                showMeI++
            }else if(frase[i].toLowerCase () === "o"){
                showMeO++
            }else if(frase[i].toLowerCase () === "u"){
                showMeU++
            }
            }
            return `Tu frase tiene: ${showMeA} A,${showMeE} E,${showMeI} I,${showMeO} O,${showMeU} U`
        }
    document.write(showMeWordA())*/

// 13- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
/*let makeANumberDivisible =()=>{
    let userNumber = parseInt (prompt("insertar numero"));
    let division = [2,3,5,7]
    for ( i = 0; i< userNumber; i++){
    if (userNumber % division [i] == 0 ){
    return `tu numero es divisible`
    } else {
        return `tu numero no es divisible`
    }
}
}
document.write(makeANumberDivisible())*/

// 14- Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

/*let makeANumberDivisible =()=>{
    let userNumber = parseInt (prompt("insertar numero"));
    let divisibleByTwo = 2;
    let divisibleByThree = 3;
    let divisibleByFive = 5;
    let divisibleBySeven = 7;
    for ( i = 0; i< userNumber; i++){
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByThree == 0 && userNumber % divisibleByFive == 0 && userNumber % divisibleBySeven == 0 ){
         return answer = " tu numero es divisible por dos , tres, cinco y siete"
    } 
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByThree == 0 && userNumber % divisibleBySeven == 0){
         return answer ="tu numero es divisible por dos, tres y siete"
    }
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByThree == 0 && userNumber % divisibleByFive == 0){
         return answer ="tu numero es divisible por dos, tres y cinco"
    }
    if (userNumber % divisibleByThree == 0 && userNumber % divisibleByFive == 0 && userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por tres, cinco y siete"
    }
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByFive == 0 && userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por dos, cinco y siete"
    }
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByThree == 0){
         return answer = "tu numero es divisible por dos y tres"
    }
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleByFive == 0){
         return answer = "tu numero es divisible por dos y cinco"
    }
    if (userNumber % divisibleByTwo == 0 && userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por dos y siete"
    }
    if (userNumber % divisibleByThree == 0 && userNumber % divisibleByFive == 0){
         return answer = "tu numero es divisible por tres y cinco"
    }
    if (userNumber % divisibleByThree == 0 && userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por tres y siete"
    }
    if (userNumber % divisibleByFive == 0 && userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por cinco y siete"
    }
    if (userNumber % divisibleByTwo == 0){
         return answer = " tu numero es divisible por dos"
    } 
    else if ( userNumber % divisibleByThree == 0){
         return answer = "tu numero es divisible por tres"
    }
    else if ( userNumber % divisibleByFive == 0){
        return answer = "tu numero es divisible por cinco"
    }
    else if (userNumber % divisibleBySeven == 0){
         return answer = "tu numero es divisible por siete"
    }
    else {
         return answer = " tu numero no es divisible por dos, tres, cinco y siete"
    }
}
}

makeANumberDivisible()

document.write(`${answer}`)*/

// 15- Escribir un programa que escriba en pantalla los divisores de un número dado

/*let showMeDividers =() =>{
    let userNumber = (prompt("insertar un numero"));
    let answer = "tu numero es divisor de "
    for (i = 0; i <= userNumber; i++){
        if (userNumber % i == 0){
            answer = answer + `${i},`
        }
    }
    document.write (`${answer}`)
}
showMeDividers()*/


// 16- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

/*let showMeComundDividers =() =>{
    let firstUserNumber = (prompt ("inserta el primer numero"));
    let secondUserNumber = (prompt ("insertar el segundo numero"));
    let menorNumber;
    let i;
    if (firstUserNumber < secondUserNumber){
        menorNumber = firstUserNumber;
    }
    else{
        menorNumber = secondUserNumber;
    }
    for (i = 2; i <= menorNumber / 2; i++){
        if (firstUserNumber % i === 0 && secondUserNumber % i === 0){
            document.write(i, ", ");
        }
    }
}
showMeComundDividers()*/

// 17- Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

/*let showMeIfMyNumberIsCousin = () =>{
    let userNumber = (prompt ("insertar tu numero"));
    let i;
    let first = true;
    for (i = 2; i < userNumber / 2; i++){
        if (userNumber % i === 0){
            first = false
        }
    }
    if (first){
        document.write (`el numero ${userNumber} es primo`)
    }
    else {
        document.write (`el numero ${userNumber} no es primo`)
    }
}
showMeIfMyNumberIsCousin ()*/