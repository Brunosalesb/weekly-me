import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from './pages/activities/activities';
import AddActivity from './pages/addActivity/addActivity';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Atividades" component={Activities} options={{ headerTitleAlign: 'center' }} />
                <Stack.Screen name="Cadastrar atividade" component={AddActivity} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Routes;
