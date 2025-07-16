import TableRow from "./TableRow";
import type {TableHead,Transaction} from "./types"
import TableHeadItem from "./TableHeadItem.tsx";

const Table = ({thead, tbody}: {thead: Array<TableHead>, tbody:Array<Transaction>}) => {
    return (
        <div>
            <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {thead.map((headElem) => {
                        return <TableHeadItem headerItem={headElem} key={headElem}/>
                    })}
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {tbody.map((bodyElem: Transaction) => {
                    return <TableRow data={bodyElem} key={bodyElem.index}/>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;