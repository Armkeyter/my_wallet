import type {Transaction} from "./types"

const TableRow = ({data}:{data:Transaction}) => {
    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.index}</td>
                <td className="px-6 py-4">{data.dateOperation}</td>
            <td className="px-6 py-4">{data.categories}</td>
            <td className="px-6 py-4">{data.subCategories}</td>
            <td className="px-6 py-4">{data.operationLabel}</td>
            <td className="px-6 py-4">{data.amount}Є</td>
            <td className="px-6 py-4">{data.year}</td>
            <td className="px-6 py-4">{data.month}</td>
            <td className="px-6 py-4">{data.isIncome ? data.index : data.amount}</td>

        </tr>
);
};

export default TableRow;