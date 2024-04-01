// Valoración por estrellas
function calificar(item) {
    var numero = item.id[0];
    let juego = item.id.substring(2);

    for (let i = 0; i < 5; i++) {
        if (i < numero) {
            document.getElementById((i + 1) + "-" + juego).classList.add('checked');
        } else {
            document.getElementById((i + 1) + "-" + juego).classList.remove('checked');
        }
    }
}


// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Mostrar alerta
function valorar(item) {
    let juego = item.id.substring(item.id.indexOf('-') + 1)
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder-' + juego);

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('i')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    appendAlert('Gracias por su valoración', 'success')
}