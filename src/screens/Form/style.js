import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: bottom + 10
        },
        inputStyle: {
            backgroundColor: '#f1f1f1',
            paddingHorizontal: '4%'
        },
        buttonStyle: {
            backgroundColor: '#f1f1f1',
            height: 50,
            width: '85%',
            alignSelf: 'center',
            marginTop: '2%',
            borderWidth: 0,
            borderRadius: 4,
            justifyContent: 'center'
        },
        buttonTextStyle: {
            fontSize: 14,
            textAlign: 'left',
            color: '#000'
        },
        button: {
            width: '85%',
            height: 50,
            marginTop: '6%',
            backgroundColor: '#aaa',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
        disabledButton: {
            width: '85%',
            height: 50,
            marginTop: '6%',
            backgroundColor: '#aaa',
            opacity: .3,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
}