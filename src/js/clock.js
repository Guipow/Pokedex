function setClock() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    $('.clock').text(`${hora}:${minutos}:${segundos}`)
}

function setDate() {
    let data = new Date();
    let week = ["Dom", "Seg", "Ter", "Quar", "Qui", "Sex", "Sab"];

    let day = String(data.getDate()).padStart(2, '0');
    let month = data.toLocaleString('default', { month: 'long' });
    let dayWeek = week[data.getDay()]

    let dataAtual = `${dayWeek}, ${day} de ${month} `

    $(".date").text(dataAtual)
}

setDate()
setInterval(setClock, 1000);
