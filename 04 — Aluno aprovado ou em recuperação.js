function verificarNota(nota, callback) {
    callback(nota); 
}

function avaliarDesempenho(nota) {
    if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Recuperação");
    }
}

verificarNota(8, avaliarDesempenho); 
verificarNota(4, avaliarDesempenho);