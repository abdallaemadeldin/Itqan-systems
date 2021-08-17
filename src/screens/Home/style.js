import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        buttonTitle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: '#000'
        }
    });
}