function processarNumero(numero, callback) {
    callback(numero);
}

processarNumero(5, (num) => {
    console.log("O triplo de 5 é:", num * 3);
});

processarNumero(10, (num) => {
    console.log("O triplo de 10 é:", num * 3);
});

processarNumero(7, (num) => {
    console.log("O triplo de 7 é:", num * 3);
});