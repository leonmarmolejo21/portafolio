document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultsDiv = document.getElementById('results');
    const scoreDiv = document.getElementById('score');
    const pdfBtn = document.getElementById('pdfBtn');
    
    submitBtn.addEventListener('click', function() {
        const formData = new FormData(quizForm);
        let score = 0;
        const answers = [];
        
        // Verificar respuestas
        for(let i = 1; i <= 3; i++) {
            const answer = formData.get(`q${i}`);
            if(answer === '1') {
                score++;
                answers.push(1);
            } else {
                answers.push(0);
            }
        }
        
        // Mostrar resultados
        scoreDiv.innerHTML = `Puntaje: ${score}/3 (${Math.round((score/3)*100)}%)`;
        
        // Mostrar gráfico
        showChart(answers);
        
        // Mostrar sección de resultados
        resultsDiv.classList.remove('hidden');
    });
    
    function showChart(answers) {
        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
                datasets: [{
                    label: 'Respuestas correctas',
                    data: answers,
                    backgroundColor: [
                        answers[0] ? '#4CAF50' : '#F44336',
                        answers[1] ? '#4CAF50' : '#F44336',
                        answers[2] ? '#4CAF50' : '#F44336'
                    ]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
    
    pdfBtn.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Título
        doc.setFontSize(20);
        doc.setTextColor(0, 100, 0);
        doc.text('Resultados del Test de Fútbol', 105, 20, { align: 'center' });
        
        // Puntaje
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(scoreDiv.textContent, 105, 40, { align: 'center' });
        
        // Gráfico
        const chartCanvas = document.getElementById('chart');
        const chartImage = chartCanvas.toDataURL('image/png');
        doc.addImage(chartImage, 'PNG', 50, 60, 110, 80);
        
        // Fecha
        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        const today = new Date();
        doc.text(`Generado el ${today.toLocaleDateString()}`, 105, 150, { align: 'center' });
        
        // Guardar
        doc.save('test-futbol-resultados.pdf');
    });
});