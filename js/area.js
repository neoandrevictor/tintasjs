// prepara constantes
const janela = 2 * 1.2;
const porta = 0.8 * 1.9;
const areaJanelaPorta = janela * porta

// variavel para controle de erros antes de submeter
let qtdeErros = 0;

function areasParede(linha) {


    let td_altura = linha.children[1].children[0];
    let altura = td_altura.value;

    let td_largura = linha.children[2].children[0];
    let largura = td_largura.value;

    let areaValor = linha.children[3];

    let area = altura * largura;

    //valida se as areas estao dentro dos requisitos
    if (altura <= 1 || altura > 15 || largura <= 1 || largura > 15) {

        areaValor.classList.add('table-warning');
        areaValor.innerHTML = "comprimentos entre 1 e 15m apenas";
        qtdeErros++;
        console.log("erros:" + qtdeErros);
    }
    else {
        areaValor.classList.remove('table-warning');
        areaValor.innerHTML = area + "m²";
        qtdeErros = 0;
        console.log(area);
        areaPortaJanelas(linha,area);
        return area;

    }

}

// inicio calculo de area das portas e janelas


function areaPortaJanelas(linha,area) {

    let areaParedes = (area);

    let qtdePortas =linha.children[4].children[0].value;
    let areaPortas = qtdePortas * porta;
    let qtdeJanelas = linha.children[5].children[0].value;
    let areaJanelas = qtdeJanelas * janela;

    let areaTotalPortaJanelas = areaJanelas + areaPortas;

    let areaValor2 = linha.children[3];
    

    // verifica as regras de negocio para janelas
    if (areaTotalPortaJanelas > areaParedes / 2) {

        areaValor2.classList.add('table-warning');
        areaValor2.innerHTML = 'area total de portas e janelas excede 50% da parede';
        qtdeErros++;

    } else {
        areaValor2.classList.remove('table-warning');
        areaValor2.innerHTML = areaTotalPortaJanelas + "m²";
        qtdeErros = 0;
    }
}