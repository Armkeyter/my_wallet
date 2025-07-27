from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from pydantic import AfterValidator, ValidationError
import numpy as np
import pandas as pd

from bank_statement import retrieve_latest_bank_statement, df_to_list_json

BANK_FILE_PATH = "./data/expenses_04_07_2025_08_26_45.csv"

NEW_DF_COLUMNS ={
        "Date operation": 'dateOperation',
        "Categorie operation": "categories",
        "Sous Categorie operation": "subCategories",
        "Libelle operation":"operationLabel",
        "Montant operation": "amount"
}

app = FastAPI()

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = retrieve_latest_bank_statement(file_path=BANK_FILE_PATH,new_columns=NEW_DF_COLUMNS)
old_column_list = df.columns.tolist()
json_transactions = df_to_list_json(df,limit=20)
# Grouped transactions

df_grouped = df.loc[:,["categories","amount"]].groupby(
    by="categories",as_index=False
).agg(
    amount_list=pd.NamedAgg(column="amount", aggfunc=list),
    amount_sum=pd.NamedAgg(column="amount", aggfunc="sum")

)
json_grouped_transactions = df_to_list_json(df_grouped)


@app.get("/api/transactions")
def get_transactions():
    return json_transactions


@app.get("/api/grouped_transactions")
def get_transactions():
    return json_grouped_transactions
