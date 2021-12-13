const labels = [
    'High School',
    'University Preparation',
    'College',
    'Specialization',
    'Currently'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Trajectory',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2016, 2018, 2020, 2021, 2022],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    borderColor: 'black',
                    tickColor: 'cyan'
                }
            },
            y: {
                grid: {
                    borderColor: 'black',
                    tickColor: 'cyan'
                }
            }
        }
    },
    plugins: {
        legend: {
            position: 'top'
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


