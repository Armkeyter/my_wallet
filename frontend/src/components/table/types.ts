export type TableHead = string | undefined;

export type Transaction = {
    index: number;
    dateOperation: string;
    categories: string;
    subCategories: string;
    operationLabel: string;
    amount: number;
    year: number;
    month: number;
    isIncome: boolean;

}