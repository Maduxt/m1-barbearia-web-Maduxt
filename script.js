const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  function buscaCortePorId(id) {
    const listaCortes = barbearia.cortes

    for (let i = 0; i < listaCortes.length; i++) {
        if (listaCortes[i].id === id) {
            return listaCortes[i]
        }
    }

    return "Corte não encontrado";
};



function buscaBarbaPorId(id) {
    const listaBarbas = barbearia.barbas

    for (let j = 0; j < listaBarbas.length; j++) {
        if (listaBarbas[j].id === id) {
            return listaBarbas[j]
        }
    }

    return 'Barba não encontrada'
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto == true) {
        return 'Estamos abertos'
    } else {
        return 'Estamos fechados'
    }
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId)
    let barba = buscaBarbaPorId(barbaId)

    let pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor
    }

    return pedido
}

function atualizarServico(lista, id, novoValor, novoTipo) {
    for (const servico of lista) {
        if (servico.id === id) {
            servico.tipo = novoTipo;
            servico.valor = novoValor;

            return lista
        }
    }
    return lista
}

function calculaTotal(pedido) {
    const precoCorte = pedido.pedidoCortePreco
    const precoBarba = pedido.pedidoBarbaPreco

    const total = precoCorte + precoBarba

    return total
}  
  
