import { Text, View, TouchableOpacity } from 'react-native';
import { useAuthContext } from '../../context/auth.context';

export const Home = () => {
    const { handleLogout } = useAuthContext()

    return (
        <View>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}