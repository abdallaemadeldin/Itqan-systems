import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/Splash/Splash';
import Home from 'src/screens/Home/Home';
import Form from 'src/screens/Form/Form';
import List from 'src/screens/List/List';

const Stack = createNativeStackNavigator();

export default WindowStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Home" component={Home} options={{ animation: "slide_from_bottom", headerShown: false, }} />
                <Stack.Screen name="Form" component={Form} options={{ animation: "slide_from_bottom", title: "Create Vacation" }} />
                <Stack.Screen name="List" component={List} options={{ animation: "slide_from_bottom", title: "Vacation List" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}