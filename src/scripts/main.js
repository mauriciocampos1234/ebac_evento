AOS.init();

const dataDoEvento = new Date("Jul 21, 2030 12:30:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "O evento começou!";
        } else {
            document.getElementById("contador").innerHTML = "Evento acabou";
    }

    document.getElementById('contador').innerHTML = `${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos ${segundosAteOEvento} segundos`;
}, 1000);