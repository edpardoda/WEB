let arrayGatos = [
    {
        nombre : "gato 1",
        peso : 10,
        edad : 2,
        color : "negro"
    },
];

const sendRegister = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById("peso").value;
    const edad = document.getElementById("edad").value;
    const color = document.getElementById("color").value;

    arrayGatos.push({ 
        nombre: nombre, 
        peso: Number(peso), 
        edad: Number(edad), 
        color: color 
    });

    buildTable();
    alert("Mascota agregada con éxito");
    e.target.reset();
};

const buildTable = () => {
    const tableBody = document.getElementById("tablebody"); 
    tableBody.innerHTML = "";

    arrayGatos.forEach((gato, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${gato.nombre}</td>
            <td>${gato.peso}</td>
            <td>${gato.edad}</td>
            <td>${gato.color}</td>

            <td>
                <button onclick="DeleteGato(${index})">Eliminar</button>
                <button onclick="UpdateGato(${index})">Actualizar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
};

const DeleteGato = (index) => {
    arrayGatos.splice(index, 1);
    alert("Gato eliminado");
    buildTable();
};

const UpdateGato = (index) => {
    const gato = arrayGatos[index];

    const nuevoNombre = prompt("Nuevo nombre:", gato.nombre);
    const nuevoPeso = prompt("Nuevo peso (kg):", gato.peso);
    const nuevaEdad = prompt("Nueva edad:", gato.edad);
    const nuevoColor = prompt("Nuevo color:", gato.color);

    if (
        nuevoNombre !== null &&
        nuevoPeso !== null &&
        nuevaEdad !== null &&
        nuevoColor !== null
    ) {
        arrayGatos[index] = {
            nombre: nuevoNombre,
            peso: Number(nuevoPeso),
            edad: Number(nuevaEdad),
            color: nuevoColor
        };

        alert("Gato actualizado correctamente");
        buildTable();
    }
};

window.onload = buildTable;
