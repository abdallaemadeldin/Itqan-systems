import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { style } from './style';

const Home = () => {
    const { container, button, buttonTitle } = style();
    const { navigate } = useNavigation();

    return (
        <View style={container}>
            <TouchableOpacity style={[button, { backgroundColor: '#0007' }]} onPress={() => navigate('Form')}>
                <Text style={buttonTitle}>Create a vacation request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[button, { backgroundColor: '#0002' }]} onPress={() => navigate('List')}>
                <Text style={buttonTitle}>List of vacation request</Text>
            </TouchableOpacity>
        </View>
    );
}
export default memo(Home);