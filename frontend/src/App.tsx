import {useState, useEffect} from 'react'
import './App.css'
import axios from "axios"
import Table from "./components/table/Table"
import LineChartComponent from "./components/charts/LineChartComponent.tsx";
import BarChartComponent from "./components/charts/BarChartComponent.tsx";
import type {TableHead, Transaction} from "./components/table/types.ts";

type statusState = "loading" | "error" | "done";
const URL :string = "http://localhost:8000/api/transactions"

function App() {
    const [transactions, setTransactions] = useState<Array<Transaction>>([])
    const [status, setStatus] = useState<statusState>("loading")
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        setStatus("loading")
        axios.get(URL)
            .then((response) => {
                    setTransactions(response.data)
                    setStatus("done")
                }
            )
            .catch((err) => {
                setStatus("error")
                console.error("Error fetching transactions", err)

            })
    }, [URL])

    // Set header columns
    let headerKeys: Array<TableHead> = []
    let tableTransactionsToShow:Array<Transaction> = [];

    if (status === "done") {
        headerKeys = Object.keys(transactions ? transactions[0] : []);
        tableTransactionsToShow = showAll ? transactions : transactions.slice(0, 10);
    }

    return (
        <>
            <h1>My Wallet</h1>
            <h3 className="text-3xl font-bold underline pb-5">
                Bank Statements
            </h3>

            <div className="relative overflow-x-auto">
                <Table thead={headerKeys} tbody={tableTransactionsToShow}/>

                {transactions.length >= 10 && (
                    <button
                        className="m-auto block mt-4 mb-5 text-white uppercase rounded text hover:bg-blue-700"
                        onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
            <LineChartComponent transactions ={transactions} />
            <BarChartComponent transactions ={transactions} />
        </>

    )
}

export default App
