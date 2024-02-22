AOS.init();

const dataDoEvento = new Date("Mar 15, 2024 19:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    diaEmMss = 1000*60*60*24;
    horaEmMss = 1000*60*60;
    minutoEmMss = 1000*60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento/diaEmMss);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMss) / horaEmMss);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMss) /  minutoEmMss);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento %  minutoEmMss) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0){
        document.getElementById('contador').innerHTML = "O evento já iniciou"
    }
}, 1000)

