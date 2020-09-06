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
                <Stack.Screen name="Atividades" component={Activity} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;
