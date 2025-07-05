import type {Transaction} from "../table/types.ts";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const lineOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Line Chart',
        },
    },
};

const LineChartComponent = ({transactions}: { transactions: Array<Transaction> }) => {
    const data = {
        labels: transactions.map((item: Transaction) => item.dateOperation),
        datasets: [
            {
                label: 'Expenses',
                data: transactions.map((item) => item.amount < 0 ? item.amount : 0),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Income',
                data: transactions.map((item) => item.amount > 0 ? item.amount : 0),
                borderColor: 'rgb(63,191,17)',
                backgroundColor: 'rgba(63,191,17, 0.5)',
            }
        ],
    };
    return (
        <Line options={lineOptions} data={data} />
    );
};

export default LineChartComponent;