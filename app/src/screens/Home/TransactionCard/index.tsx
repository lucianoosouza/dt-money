import { Transaction } from '@/shared/interfaces/transaction'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { MaterialIcons } from '@expo/vector-icons'
import { format } from 'date-fns'
import { colors } from '@/shared/colors'
import { TransactionTypes } from '@/shared/enums/transactionTypes'
import clsx from 'clsx'
import { RightAction } from './RightAction'
import { LeftAction } from './LeftAction'
import { moneyMapper } from '@/shared/utils/money-mapper'

interface Params {
  transaction: Transaction
}

const ACTION_WIDTH = 80
const SWIPE_THRESHOLD = ACTION_WIDTH / 2

export const TransactionCard: FC<Params> = ({ transaction }) => {
  const isExpense = transaction.type.id === TransactionTypes.expense
  const translateX = useSharedValue(0)
  const startX = useSharedValue(0)

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10])
    .onBegin(() => {
      startX.value = translateX.value
    })
    .onUpdate((event) => {
      const nextTranslateX = startX.value + event.translationX
      translateX.value = Math.min(
        ACTION_WIDTH,
        Math.max(-ACTION_WIDTH, nextTranslateX),
      )
    })
    .onEnd(() => {
      if (translateX.value <= -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-ACTION_WIDTH)
      } else if (translateX.value >= SWIPE_THRESHOLD) {
        translateX.value = withSpring(ACTION_WIDTH)
      } else {
        translateX.value = withSpring(0)
      }
    })

  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View className="h-[140] w-[90%] self-center mb-4">
      <View className="absolute inset-0 flex-row justify-between">
        <LeftAction transaction={transaction} />
        <RightAction transactionId={transaction.id} />
      </View>

      <GestureDetector gesture={panGesture}>
        <Animated.View
          className="h-[140] bg-background-tertiary rounded-md p-6"
          style={animatedCardStyle}
        >
          <Text className="text-white text-base">
            {transaction.description}
          </Text>
          <Text
            className={clsx(
              'text-xl font-bold mt-2',
              isExpense ? 'text-accent-red' : 'text-accent-brand-light',
            )}
          >
            {isExpense && '-'}R$ {moneyMapper(transaction.value)}
          </Text>
          <View className="flex-row w-full justify-between items-center">
            <View className="items-center flex-row mt-3">
              <MaterialIcons
                name="label-outline"
                color={colors.gray[700]}
                size={23}
              />
              <Text className="text-gray-700 text-base ml-2">
                {transaction.category.name}
              </Text>
            </View>
            <View className="items-center flex-row mt-3">
              <MaterialIcons
                name="calendar-month"
                color={colors.gray[700]}
                size={20}
              />
              <Text className="text-gray-700 text-base ml-2">
                {format(transaction.createdAt, 'dd/MM/yyyy')}
              </Text>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  )
}
