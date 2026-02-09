// Función para calcular el presupuesto
function calcularPresupuesto() {
    // Obtener valores de los inputs
    const costeFilamento = parseFloat(document.getElementById('costeFilamento').value) || 0;
    const tiempoImpresion = parseFloat(document.getElementById('tiempoImpresion').value) || 0;
    const valorPintura = parseFloat(document.getElementById('valorPintura').value) || 0;
    const incluirDiseno = document.getElementById('incluirDiseno').checked;
    
    // Cálculos
    const filamentoCalculado = costeFilamento * 2;
    const tiempoCalculado = tiempoImpresion * 1.5;
    const disenoCalculado = incluirDiseno ? 10.00 : 0.00;
    
    // Subtotal
    let subtotal = filamentoCalculado + tiempoCalculado + valorPintura + disenoCalculado;
    
    // Margen de error (5%)
    const margenError = subtotal * 0.05;
    
    // PVP Final
    const pvpFinal = subtotal + margenError;
    
    // Mostrar resultados
    document.getElementById('filamentoResultado').textContent = filamentoCalculado.toFixed(2);
    document.getElementById('tiempoResultado').textContent = tiempoCalculado.toFixed(2);
    document.getElementById('pinturaResultado').textContent = valorPintura.toFixed(2);
    document.getElementById('disenoResultado').textContent = disenoCalculado.toFixed(2);
    document.getElementById('subtotalResultado').textContent = subtotal.toFixed(2);
    document.getElementById('margenResultado').textContent = margenError.toFixed(2);
    document.getElementById('pvpFinal').textContent = pvpFinal.toFixed(2);
    
    // Mostrar el desglose
    document.querySelector('.resultados').style.display = 'block';
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('costeFilamento').value = '';
    document.getElementById('tiempoImpresion').value = '';
    document.getElementById('valorPintura').value = '';
    document.getElementById('incluirDiseno').checked = false;
    
    // Resetear resultados
    document.getElementById('filamentoResultado').textContent = '0.00';
    document.getElementById('tiempoResultado').textContent = '0.00';
    document.getElementById('pinturaResultado').textContent = '0.00';
    document.getElementById('disenoResultado').textContent = '0.00';
    document.getElementById('subtotalResultado').textContent = '0.00';
    document.getElementById('margenResultado').textContent = '0.00';
    document.getElementById('pvpFinal').textContent = '0.00';
    
    // Ocultar resultados
    document.querySelector('.resultados').style.display = 'none';
}

// Añadir event listeners a los botones
document.addEventListener('DOMContentLoaded', function() {
    const btnCalcular = document.querySelector('button[onclick="calcularPresupuesto()"]');
    const btnLimpiar = document.querySelector('button[onclick="limpiarFormulario()"]');
    
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularPresupuesto);
    }
    
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarFormulario);
    }
});