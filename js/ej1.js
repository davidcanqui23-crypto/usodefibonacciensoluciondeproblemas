document.getElementById('btnCalcular').addEventListener('click', function() {
    const mesesInput = document.getElementById('meses').value;
    const huertosInput = document.getElementById('huertos').value;
    const contenedorResultado = document.getElementById('resultado');
    if (mesesInput === "" || huertosInput === "" || mesesInput <= 0 || huertosInput <= 0) {
        contenedorResultado.classList.remove('hidden');
        contenedorResultado.style.borderColor = "#red";
        contenedorResultado.innerHTML = "Por favor, ingrese valores válidos mayores a 0.";
        return;
    }

    const meses = parseInt(mesesInput);
    const huertos = parseInt(huertosInput);
    let produccionPorHuerto = 0;

    if (meses === 1) {
        produccionPorHuerto = 50;
    } else if (meses === 2) {
        produccionPorHuerto = 50 + 70; 
    } else {
        let totalAcumulado = 50 + 70;
        
        for (let i = 3; i <= meses; i++) {
            totalAcumulado += 80; 
        }
        produccionPorHuerto = totalAcumulado;
    }

    const produccionTotal = produccionPorHuerto * huertos;

    contenedorResultado.classList.remove('hidden');
    contenedorResultado.innerHTML = `
        <p>📈 Rendimiento Calculado:</p>
        <ul>
            <li>Producción acumulada por huerto en ${meses} meses: ${produccionPorHuerto} papas.</li>
            <li><strong>Producción TOTAL (${huertos} huertos): ${produccionTotal} papas.</strong></li>
        </ul>
    `;
});