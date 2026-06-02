import { colors } from '@/shared/colors'
import { TransactionTypes } from '@/shared/enums/transactionTypes'
import { Transaction } from '@/shared/interfaces/transaction'
import { MaterialIcons } from '@expo/vector-icons'
import clsx from 'clsx'
import { format } from 'date-fns'
import { FC, useState } from 'react'
import { Text, View } from 'react-native'
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable'
import { RightAction } from './RightAction'
import { DeleteModal } from './RightAction/DeleteModal'

interface TransactionCardParams {
    transaction: Transaction
}

export const TransactionCard: FC<TransactionCardParams> = ({
    transaction,
}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const isExpense = transaction.type.id === TransactionTypes.expense

    return (
        <>
            <ReanimatedSwipeable
                containerStyle={{
                    alignItems: 'center',
                    alignSelf: 'center',
                    overflow: 'visible',
                    width: '90%',
                    marginBottom: 16,
                }}
                renderRightActions={() => (
                    <RightAction onPress={() => setModalVisible(true)} />
                )}
                friction={0.8}
                overshootRight={false}
            >
                <View className="h-[140px] w-full rounded-6 bg-background-tertiary p-6">
                    <Text className="text-base text-white">
                        {transaction.description}
                    </Text>

                    <Text
                        className={clsx(
                            'mt-2 text-2xl font-bold',
                            isExpense
                                ? 'text-accent-red'
                                : 'text-accent-brand-light'
                        )}
                    >
                        {isExpense && '- '}
                        R$ {transaction.value.toFixed(2).replace('.', ',')}
                    </Text>

                    <View className="w-full flex-row justify-between">
                        <View className="mt-3 flex-row items-center">
                            <MaterialIcons
                                name="label-outline"
                                color={colors.gray[700]}
                                size={23}
                            />

                            <Text className="ml-2 text-base text-gray-700">
                                {transaction.category.name}
                            </Text>
                        </View>

                        <View className="mt-3 flex-row items-center">
                            <MaterialIcons
                                name="calendar-today"
                                color={colors.gray[700]}
                                size={20}
                            />

                            <Text className="ml-2 text-base text-gray-700">
                                {format(transaction.createdAt, 'dd/MM/yyyy')}
                            </Text>
                        </View>
                    </View>
                </View>
            </ReanimatedSwipeable>

            <DeleteModal
                visible={modalVisible}
                hideModal={() => setModalVisible(false)}
            />
        </>
    )
}
