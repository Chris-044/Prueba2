const formulario = document.getElementById('formulario-invitacion');
const tarjeta = document.getElementById('tarjeta');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const temaFiesta = document.getElementById('temaFiesta').value;
    const fechaFiesta = document.getElementById('fechaFiesta').value;
    const horaFiesta = document.getElementById('horaFiesta').value;
    const ubicacionFiesta = document.getElementById('ubicacionFiesta').value;

    const htmlTarjeta = `
        <p>SOY ${nombre}</p>
        <h2><i>¡Y TE INVITO A MI FIESTA DE CUMPLEAÑOS!</i></h2>
        <p>CUMPLIRE ${edad} AÑOS</p>
        <p>LA TEMATICA SERA DE ${temaFiesta}</p>
        <p>FECHA: ${fechaFiesta}</p>
        <p>HORA: ${horaFiesta}</p>
        <p>LUGAR: ${ubicacionFiesta}</p>
        <img class="img1" src="png-clipart-mario-mario-removebg-preview.png" style="width: 150px;">
        <h2>ESPERO CONTAR  CON TU PRESENCIA<h2>
        <h2>¡NO FALTES!</h2>
    `;
    
    tarjeta.classList.remove(...tarjeta.classList);
    tarjeta.classList.add(temaFiesta)

    tarjeta.innerHTML = htmlTarjeta;
    });
