document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = form.elements['name'].value;
        const email = form.elements['email'].value;
        const telephone = form.elements['telephone'].value;

        if (formIsValid(nombre, email, telephone)) {
            alert('El formulario se a procesado de forma exitosa')
        } else {
            alert('Hubo un problema para procesar los datos el formulario, por favor revise todos los campos')
        }
    });
});

function formIsValid(name, email, tel) {
    console.log(nameIsValid(name));
    console.log(emailIsValid(email));
    console.log(telephoneIsValid(tel));
    return nameIsValid(name) && emailIsValid(email) && telephoneIsValid(tel);
}

function nameIsValid(name) {
    let numChar = name.length;
    return numChar <= 20;
}

function emailIsValid(email) {
    let atSign = email.include('@');
    return atSign;
}

function telephoneIsValid(tel) {
    return (tel.startsWith('+569')) && ((tel.length - 4) = 8);
}