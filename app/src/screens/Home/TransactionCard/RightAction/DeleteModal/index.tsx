import { colors } from '@/shared/colors'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import {
    Modal,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native'

interface DeleteModalProps {
    visible: boolean
    hideModal: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({
    visible,
    hideModal,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={hideModal}
        >
            <TouchableWithoutFeedback onPress={hideModal}>
                <View className="flex-1 items-center justify-center bg-black/50">
                    <TouchableWithoutFeedback
                        onPress={(event) => event.stopPropagation()}
                    >
                        <View className="m-5 h-[322px] w-[90%] items-center rounded-[16px] bg-background-secondary p-8 shadow-lg">
                            <View className="w-full flex-row items-center justify-between border-b border-gray-300 pb-6">
                                <View className="flex-row items-center gap-6">
                                    <MaterialIcons
                                        name="error-outline"
                                        className="mr-4"
                                        color={colors.gray[400]}
                                        size={25}
                                    />

                                    <Text className="text-xl text-white">
                                        Apagar transacao
                                    </Text>
                                </View>

                                <TouchableOpacity onPress={hideModal}>
                                    <MaterialIcons
                                        name="close"
                                        color={colors.gray[800]}
                                        size={25}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
