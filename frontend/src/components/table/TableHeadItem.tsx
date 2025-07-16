import type {TableHead} from "./types.ts";

const TableHeadItem = ({headerItem}: { headerItem: TableHead }) => {
    return (
        <th className="px-6 py-3">
            {headerItem}
        </th>
    );

};

export default TableHeadItem;