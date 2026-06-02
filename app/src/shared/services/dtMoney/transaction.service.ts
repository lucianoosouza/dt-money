import { dtMoneyApi } from '@/shared/api/dtmoney'
import { CreateTransactionRequest } from '@/shared/interfaces/http/createTransactionRequest'
import { TransactionCategory } from '@/shared/interfaces/http/transaction-category-response'
import { GetTransactionsParams } from '@/shared/interfaces/http/get-transactions-request'
import qs from 'qs'
import { GetTransactionsResponse } from '@/shared/interfaces/http/get-transactions-response'
import { TotalTransaction } from '@/shared/interfaces/total-transactions'

const emptyTotalTransaction: TotalTransaction = {
    revenue: 0,
    expense: 0,
    total: 0,
}

export const getTransactions = async (
    params: GetTransactionsParams
): Promise<GetTransactionsResponse> => {
    const { data } = await dtMoneyApi.get<GetTransactionsResponse>(
        '/transaction',
        {
            params,
            paramsSerializer: (params) =>
                qs.stringify(params, {
                    arrayFormat: 'repeat',
                }),
        }
    )

    return {
        ...data,
        totalTransaction:
            data.totalTransaction ??
            data.totalTransactions ??
            emptyTotalTransaction,
    }
}
export const getTransactionCategories = async (): Promise<
    TransactionCategory[]
> => {
    const { data } = await dtMoneyApi.get<TransactionCategory[]>(
        '/transaction/categories'
    )

    return data
}

export const createTransaction = async (
    transaction: CreateTransactionRequest
): Promise<void> => {
    await dtMoneyApi.post('/transaction', transaction)
}
