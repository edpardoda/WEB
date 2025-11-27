let arrayEstudiantes = [
    {
        numero : "1",
        id: "31411",
        nombre : "Eduardo",
        correo : "edpardoda@uide.edu.ec",
        telefono: "0996877366"
    },
];


function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

const sendRegister = (e) => {
    e.preventDefault();

    const numero = document.getElementById("numero").value;
    const id = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    arrayEstudiantes.push({ numero, id, nombre, correo, telefono });

    buildTable();
    alert("Estudiante agregado con éxito");

    e.target.reset();
};


const buildTable = () => {
    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = "";

    arrayEstudiantes.forEach((est, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${est.numero}</td>
            <td>${est.id}</td>
            <td>${est.nombre}</td>
            <td>${est.correo}</td>
            <td>${est.telefono}</td>

            <td>
                <button class="modificar" onclick="ActualizarEst(${index})">Modificar</button>
                <button class="eliminar" onclick="eliminarEst(${index})">Eliminar</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
};

const eliminarEst = (index) => {
    arrayEstudiantes.splice(index, 1);
    alert("Estudiante eliminado");
    buildTable();
};

const ActualizarEst = (index) => {
    const est = arrayEstudiantes[index];

    const nuevoNombre = prompt("Nuevo nombre:", est.nombre);
    const nuevoCorreo = prompt("Nuevo correo:", est.correo);
    const nuevoTel = prompt("Nuevo teléfono:", est.telefono);

    if (nuevoNombre !== null && nuevoCorreo !== null && nuevoTel !== null) {
        est.nombre = nuevoNombre;
        est.correo = nuevoCorreo;
        est.telefono = nuevoTel;

        alert("Estudiante actualizado");
        buildTable();
    }
};

function buscarEstudiante() {
    const filtro = document.getElementById("buscar").value.toLowerCase();
    const resultados = arrayEstudiantes.filter(est => 
        est.nombre.toLowerCase().includes(filtro)
    );

    const tableBody = document.getElementById("tablebody");
    tableBody.innerHTML = "";

    resultados.forEach(est => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${est.numero}</td>
            <td>${est.id}</td>
            <td>${est.nombre}</td>
            <td>${est.correo}</td>
            <td>${est.telefono}</td>
            <td>
                <button class="modificar">Modificar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

window.onload = buildTable;
