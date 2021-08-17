import { StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { width } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card: {
            width: width * 94 / 100,
            minHeight: 100,
            backgroundColor: '#f1f1f1',
            borderRadius: 4,
            padding: '4%',
            marginBottom: '2%'
        },
        contentContainerStyle: {
            marginTop: 10,
            marginBottom: bottom + 10,
        },
        deleteBtn: {
            height: 40,
            color: 'red',
            position: 'absolute',
            top: 10,
            right: 10,
            zIndex: 1
        },
        empty: {
            marginTop: '30%',
            fontSize: 16,
            color: '#000',
            fontWeight: 'bold',
        },
        inputStyle: {
            backgroundColor: '#f1f1f1',
            paddingHorizontal: '4%'
        }
    });
}