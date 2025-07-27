import type {Transaction} from "../table/types.ts";
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    PointElement,
    Legend
);

const barOptions = {
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

const BarChartComponent = ({transactions}: { transactions: Array<Transaction> }) => {
    const data = {
        labels: transactions.map((item: Transaction) => item.dateOperation),
        datasets: [
            {
                label: 'Expenses',
                data: transactions.map((item) => item.amount < 0 ? item.amount : null),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Income',
                data: transactions.map((item) => item.amount > 0 ? item.amount : null),
                borderColor: 'rgb(63,191,17)',
                backgroundColor: 'rgba(63,191,17, 0.5)',
            }
        ],
    };
    return (
        <div className="flex-1/2">
            <Bar options={barOptions} data={data} />
        </div>

    );
};

export default BarChartComponent;