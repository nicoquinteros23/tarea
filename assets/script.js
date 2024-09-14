document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Crear un objeto con los datos
    const formData = {
        firstName: firstName,
        lastName: lastName
    };

    // Obtener los datos actuales del localStorage
    const storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];
    storedData.push(formData);
    localStorage.setItem("formDataArray", JSON.stringify(storedData));

    // Intentar notificar a la ventana de la tabla para que se actualice
    // Abre la ventana de la tabla si no está abierta
    const dataWindow = window.open('', 'dataWindow');
    if (dataWindow) {
        dataWindow.location.href = 'tabla.html'; // Redirige o recarga la página de la tabla
    } else {
        // Si la ventana no estaba abierta, la abrimos y luego la recargamos
        window.open('tabla.html', 'dataWindow');
    }
});
