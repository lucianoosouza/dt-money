import { useAuthContext } from '@/context/auth.context'
import { colors } from '@/shared/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export const AppHeader = () => {
    const { handleLogout } = useAuthContext()

    return (
        <View className="w-full flex-row justify-between p-8">
            <View>
                <Image
                    source={require('../../../assets/logo.png')}
                    className="h-[30px] w-[130px]"
                />

                <TouchableOpacity
                    className="mt-2 flex-row items-center gap-2"
                    onPress={handleLogout}
                >
                    <MaterialIcons
                        name="logout"
                        color={colors.gray[700]}
                        size={15}
                    />

                    <Text className="text-base text-gray-700">
                        Sair da conta
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="h-[50px] w-[130px] items-center justify-center rounded-xl bg-accent-brand">
                <Text className="text-sm font-bold text-white">
                    Nova transação
                </Text>
            </TouchableOpacity>
        </View>
    )
}
