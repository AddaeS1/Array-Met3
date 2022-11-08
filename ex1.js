const numerosA = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const numerosB = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const numerosC = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutasD = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
const frutasE = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
const frutasF = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

let numerosA2 = numerosA.sort((a, b) => {
    return(a-b);
});
console.log(numerosA2);

let numerosB2 = numerosB.sort((b,a) =>{
    return(b-a);
})
console.log(numerosB2.reverse());

let numerosC2 = numerosC.sort();
console.log(numerosC2)

let frutasD2rev = frutasD.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutasD2rev);

let frutasD2 = frutasD.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutasD2);