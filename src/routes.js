import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Activity from './pages/activity/activity';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Segunda-feira" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Terça-feira" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Quarta-feira" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Quinta-feira" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Sexta-feira" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Sábado" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
                <Stack.Screen name="Domingo" component={Activity} options={{ headerTitleAlign: 'center', headerLeft: null }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;
