import { AuthHeader } from '@/components/AuthHeader'
import { DismissKeyboardView } from '@/components/DismissKeyboard'
import { View } from 'react-native'
import {useAuthContext }from'@/context/auth.context'
import { LoginForm } from './LoginForm'

export const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />

        <LoginForm />
      </View>
    </DismissKeyboardView>
  )
}