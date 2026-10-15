function mostrarBoasVindas() {
    console.log("Seja bem-vindo ao sistema!");
}

function mostrarDespedida() {
    console.log("Até logo! Volte sempre.");
}

function executarMensagem(callback) {
    callback(); 
}

executarMensagem(mostrarBoasVindas); 
executarMensagem(mostrarDespedida); 