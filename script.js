/*
Examen Práctico #1 - Domingo Luis
Desarrolla un programa usando JavaScript y siendo ejecutado desde HTML en el navegador, que permita a partir de tres números enteros indicar:
    a. Si son todos diferentes.
    b. Si son todos iguales.
    c. El mayor.
    d. El menor.
    e. La media entre ellos (suma de todos, dividida entre la cantidad de números).
*/

// c y d. Organizar las entradas de menor a mayor con el algoritmo de la burbuja
function sort(n1, n2, n3) {
    var sorted = [n1, n2, n3];
    for(let i = 1; i <= sorted.length; i++){
        for(let j = 0; j <= sorted.length; j++){
            if(sorted[j] > sorted[j+1])
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
        }
    }

    return sorted;
}

// e. Media entre ellos
function media(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Funcion principal para ejecutar
function main(){
    var n1 = parseInt(prompt("Introduzca el primer número"));
    var n2 = parseInt(prompt("Introduzca el segundo número"));
    var n3 = parseInt(prompt("Introduzca el tercer número"));

    // a. Si son todos diferentes, se chequea con condiciones y if else para los prompts de respuesta.
    if((n1 != n2) && (n1 != n3) && (n2 != n3)){
        alert("Son todos diferentes");
    } else {
        alert("No son todos diferentes");
    }

    // b. Si son todos iguales, se chequea con condiciones y if else para los prompts de respuesta.
    if((n1 == n2) && (n2 == n3)) {
        alert("Son todos iguales");
    } else {
        alert("No son todos iguales")
    }

    // c. El mayor. Los incluimos en un arreglo y los organizamos con la función para obtener el mayor en la ultima posición
    var arr = sort(n1, n2, n3);
    alert("El mayor número es: " + arr[arr.length - 1]);

    // d. El menor. Devolvemos la primera posición del arreglo ordenado.
    alert("El menor número es: " + arr[0]);

    // e. La media entre ellos (suma de todos, dividida entre la cantidad de números).
    alert("La media es: " + media(arr));   
}

main();
