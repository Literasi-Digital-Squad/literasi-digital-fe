'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ labels, values }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Jumlah',
                data: values,
                backgroundColor: ['#FFAE4C', '#FF928A', '#3CC3DF', '#ab7216', '#c48170', '#F979F1', '#5179FF', '#7379FF', '#a4f542', '#07b82e']
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
