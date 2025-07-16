from typing import List

import pandas as pd


def preprocess_data(df: pd.DataFrame,new_columns:dict[str,str] = None) -> pd.DataFrame:
    """Preprocess data from dataframe in correct format.

    Preprocessing:
    Convert Date column in datetime
    Create year column
    Create month column
    Create year-month column
    Convert "Montant operatio" to float
    Create column isIncome (true if number is positive)

    Drop column: ["Pointage operation",  "Commentaire operation"]

    :param df: Dataframe with information from the account
    :param new_columns: Dictionary of new column names
    :return: Dataframe with preprocessed data
    """
    df["datetime"] = pd.to_datetime(df.loc[:, "Date operation"], dayfirst=True)
    df["Date operation"] = df.loc[:, "datetime"].dt.date
    df["year"] = df.loc[:, "datetime"].dt.year.astype(str)
    df["month"] = df.loc[:, "datetime"].dt.month.astype(str)
    df.loc[:, "Montant operation"] = df.loc[:, "Montant operation"].apply(lambda x: float(x.replace(",", ".")))
    df["isIncome"] = df.loc[:, "Montant operation"] >= 0.0
    df.drop([
        "datetime",
        "Pointage operation",
        "Commentaire operation"
    ], axis=1, inplace=True)
    df.insert(0, "index", df.index)
    if new_columns:
        df.rename(columns=new_columns,inplace=True)
    return df
