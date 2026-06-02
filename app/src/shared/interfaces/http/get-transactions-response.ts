import { TotalTransaction } from '@/shared/interfaces/total-transactions'
import { Transaction } from '@/shared/interfaces/transaction'

export interface GetTransactionsResponse {
    data: Transaction[]
    totalRows: number
    totalPages: number
    page: number
    perPage: number
    totalTransaction: TotalTransaction
    totalTransactions?: TotalTransaction
}
