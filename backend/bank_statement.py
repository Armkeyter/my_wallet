import pandas as pd
from pathlib import Path
from preprocessing import preprocess_data
from typing import List,Dict,Any

def retrieve_latest_bank_statement(file_path: str,new_columns:dict[str,str]=None) -> pd.DataFrame:
    """Retrieve latest bank statement.

    - Retrieve statement from the file.
    - Preprocess to the right format.
    -Change column names if change_column_names is True.

    :param file_path: str path to file of bank statement.
    :param new_columns: dict[str,str] new column names.
    :return: pandas DataFrame.
    """
    file_path = Path(file_path)
    with open(file_path) as f:
        file_header = f.readline()
    print(file_header)

    df = pd.read_csv(
        file_path,
        header=2,
        sep=";",
        encoding="ISO-8859-1",
    )
    df = preprocess_data(df = df,new_columns=new_columns)

    return df

def df_to_list_json(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """Convert pandas dataframe to list of dicts.

    :param df: pandas dataframe.
    :param columns: list of column names.
    :return:
    """
    return df.loc[:100,:].to_dict(orient="records")