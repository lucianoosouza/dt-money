import { useTransactionContext } from '@/context/transaction.context'
import { TransactionTypes } from '@/shared/enums/transactionTypes'
import Checkbox from 'expo-checkbox'
import { Text, TouchableOpacity, View } from 'react-native'

export const TypeFilter = () => {
  const { handleFilters, filters } = useTransactionContext()

  const selectType = (typeId: TransactionTypes) => {
    handleFilters({ key: 'typeId', value: typeId })
  }

  return (
    <View className="mb-6">
      <Text className="text-base font-medium mb-5 text-gray-600">
        Tipo de transação
      </Text>

      <TouchableOpacity
        className="flex-row items-center py-2"
        onPress={() => selectType(TransactionTypes.revenue)}
      >
        <Checkbox
          className="mr-4"
          value={filters.typeId === TransactionTypes.revenue}
          onValueChange={() => selectType(TransactionTypes.revenue)}
        />
        <Text className="text-lg text-white">Entrada</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-row items-center py-2"
        onPress={() => selectType(TransactionTypes.expense)}
      >
        <Checkbox
          className="mr-4"
          value={filters.typeId === TransactionTypes.expense}
          onValueChange={() => selectType(TransactionTypes.expense)}
        />
        <Text className="text-lg text-white">Saída</Text>
      </TouchableOpacity>
    </View>
  )
}
