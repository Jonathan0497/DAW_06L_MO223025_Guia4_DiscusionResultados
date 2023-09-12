class Transaccion {
    constructor() {
        this.producto = "";
        this.valorUnitario = 0;
        this.unidades = 0;
        this.total = 0;
    }

    establecerProducto(producto) {
        this.producto = producto;
    }

    establecerValorUnitario(valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    establecerUnidades(unidades) {
        this.unidades = unidades;
    }

    calcularTotal() {
        this.total = this.valorUnitario * this.unidades;
    }

    obtenerTotal() {
        return this.total;
    }
}

const listaTransacciones = [];

function configurar() {
    const botonMostrar = document.getElementById("mostrar");
    botonMostrar.addEventListener("click", function () {
        crearTransaccion(document.frmbook);
    });
}

function crearTransaccion(formulario) {
    const transaccion = new Transaccion();
    transaccion.establecerProducto(formulario.txtNombreProducto.value);
    transaccion.establecerValorUnitario(parseFloat(formulario.txtPrecioUnitario.value));
    transaccion.establecerUnidades(parseInt(formulario.txtCantidad.value));
    transaccion.calcularTotal();

    mostrarPropiedades(transaccion, "InfoTransaccion");
}

function mostrarPropiedades(objeto, nombreObj) {
    let infoTransaccion = "";
    let tablaTransaccion = "";
    const info = document.getElementById('infoVenta');
    for (const propiedad in objeto) {
        infoTransaccion += `${nombreObj}.${propiedad} = ${objeto[propiedad]}\n`;
    }

    if (confirm(`${infoTransaccion}\n\n¿Es esta información correcta?`)) {
        listaTransacciones.push(objeto);
    }

    let id = 1;
    let indice = 0;
    let ventaTotal = 0;

    listaTransacciones.forEach(elemento => {
        tablaTransaccion += "\t<tr>\n";
        tablaTransaccion += `\t\t<td>${id++}</td>\n`;
        tablaTransaccion += `\t\t<td>${elemento.producto}</td>\n`;
        tablaTransaccion += `\t\t<td>${elemento.valorUnitario}</td>\n`;
        tablaTransaccion += `\t\t<td>${elemento.unidades}</td>\n`;
        tablaTransaccion += `\t\t<td>${elemento.total}</td>\n`;
        tablaTransaccion += `\t\t<td><button onclick='remover(${indice++})' class='btn btn-danger'>Eliminar</button></td>\n`;
        tablaTransaccion += "\t</tr>\n";

        ventaTotal += elemento.obtenerTotal();
    });

    tablaTransaccion += `<tr><td colspan="4">Total</td><td>${ventaTotal}</td><td></td></tr>`;

    info.innerHTML = tablaTransaccion;
}

function remover(indice) {
    if (confirm(`¿Está seguro de eliminar este registro con ID = ${indice}?`)) {
        listaTransacciones.splice(parseInt(indice), 1);
        mostrarPropiedades({}, "InfoTransaccion");
    }
}

window.addEventListener("load", configurar);
