import { View, Image } from 'react-native'
import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible'

export const AuthHeader = () => {
    const keyboardVisible = useKeyboardVisible()
    if (keyboardVisible) {
        return <></>
    }
    return (
        <View className="items-center justify-center h-40">
            < Image
                source={require('../../../assets/logo1.png')}
                className="h-[48px] w-[255px]"
            />
        </View >
    )
}