import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        logo: {
            width: '75%',
            height: '20%',
            resizeMode: 'stretch'
        }
    });
}