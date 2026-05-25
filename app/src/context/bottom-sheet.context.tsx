import React, {
    FC,
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

import { colors } from '@/shared/colors'

interface BottomSheetContextType {
    openBottomSheet: (content: React.ReactNode, index?: number) => void
    closeBottomSheet: () => void
}

export const BottomSheetContext = createContext({} as BottomSheetContextType)

export const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null)

    const [content, setContent] = useState<React.ReactNode | null>(null)
    const [sheetIndex, setSheetIndex] = useState(0)

    const snapPoints = useMemo(() => ['55%'], [])

    const openBottomSheet = useCallback(
        (newContent: React.ReactNode, index: number = 0) => {
            setSheetIndex(index)
            setContent(newContent)
        },
        []
    )

    const closeBottomSheet = useCallback(() => {
        bottomSheetRef.current?.close()
    }, [])

    useEffect(() => {
        if (!content) {
            return
        }

        requestAnimationFrame(() => {
            bottomSheetRef.current?.snapToIndex(sheetIndex)
        })
    }, [content, sheetIndex])

    return (
        <BottomSheetContext.Provider
            value={{
                openBottomSheet,
                closeBottomSheet,
            }}
        >
            {children}

            {content && (
                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={snapPoints}
                    enablePanDownToClose
                    onClose={() => setContent(null)}
                    backgroundStyle={{
                        backgroundColor: colors.gray[800],
                    }}
                    handleIndicatorStyle={{
                        backgroundColor: colors.gray[700],
                    }}
                >
                    <BottomSheetView
                        style={{
                            flex: 1,
                            backgroundColor: colors.gray[800],
                        }}
                    >
                        {content}
                    </BottomSheetView>
                </BottomSheet>
            )}
        </BottomSheetContext.Provider>
    )
}

export const useBottomSheetContext = () => {
    return useContext(BottomSheetContext)
}
