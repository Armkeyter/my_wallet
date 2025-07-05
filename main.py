import pandas as pd
from pathlib import Path


def main():
    pd.set_option('display.max_columns', None)
    pd.set_option('display.max_rows', None)
    file_path = Path("./data/expenses_04_07_2025_08_26_45.csv")
    with open(file_path) as f:
        file_header = f.readline()
    print(file_header)

    df = pd.read_csv(
        file_path,
        header=2,
        sep=";",
        encoding="ISO-8859-1",
    )
    print(df.head(10))


if __name__ == '__main__':
    main()
