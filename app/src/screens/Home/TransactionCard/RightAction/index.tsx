import { TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/shared/colors'

interface RightActionProps {
    onPress: () => void
}

export const RightAction = ({ onPress }: RightActionProps) => {
    return (
        <View className="h-[140px] w-[80px]">
            <TouchableOpacity
                className="h-full w-full items-center justify-center rounded-r-6 bg-accent-red-background-primary"
                onPress={onPress}
            >
                <MaterialIcons
                    name="delete-outline"
                    color={colors.white}
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}
