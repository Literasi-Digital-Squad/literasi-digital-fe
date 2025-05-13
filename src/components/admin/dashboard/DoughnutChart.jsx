'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Advance', 'Tinggi', 'Lanjut', 'Dasar', 'Advance', 'Tinggi', 'Lanjut', 'Dasar', 'Ha', 'Hi'],
        datasets: [
            {
                label: 'Jumlah',
                data: [2309, 2866, 2358, 2468, 1000, 1000, 1000, 1000, 1000, 1000],
                backgroundColor: ['#FFAE4C', '#FF928A', '#3CC3DF', '#8979FF', '#8971F0', '#8979F1', '#8979FF', '#8979FF', '#8979FF', '#8979FF']
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '60%', // buat donut lebih tipis atau tebal
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${percentage}%`;
                    },
                },
            },
        },
    };

    return <div className='w-[350px] h-[350px]'><Doughnut data={data} options={options} /></div>;
};

export default DoughnutChart;
