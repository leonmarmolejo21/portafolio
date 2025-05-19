document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular');
    const horasInput = document.getElementById('horas');
    const tipoAutoSelect = document.getElementById('tipo-auto');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {

        const horas = parseFloat(horasInput.value);
        const precioPorHora = parseFloat(tipoAutoSelect.value);
        
 
        if (isNaN(horas) || horas <= 0) {
            alert('Por favor ingresa un número válido de horas');
            return;
        }
        

        const total = horas * precioPorHora;
        
        resultadoDiv.textContent = `Total a pagar: $${total.toFixed(2)}`;
    });
});