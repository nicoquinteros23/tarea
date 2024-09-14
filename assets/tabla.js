window.addEventListener('DOMContentLoaded', () => {
    // Obtener los datos de localStorage
    const storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // Seleccionar el cuerpo de la tabla
    const dataTable = document.getElementById("dataTable");

    // Limpiar la tabla
    dataTable.innerHTML = "";

    // Agregar cada dato a la tabla con numeración
    storedData.forEach((data, index) => {
        const newRow = dataTable.insertRow();
        const indexCell = newRow.insertCell(0);
        const firstNameCell = newRow.insertCell(1);
        const lastNameCell = newRow.insertCell(2);

        // Agregar los valores a las celdas
        indexCell.textContent = index + 1; // Numeración
        firstNameCell.textContent = data.firstName;
        lastNameCell.textContent = data.lastName;
    });

    // Manejar el evento del botón de limpiar
    document.getElementById("clearTable").addEventListener("click", () => {
        // Limpiar el localStorage
        localStorage.removeItem("formDataArray");
        // Limpiar la tabla en la vista
        dataTable.innerHTML = "";
    });
});
