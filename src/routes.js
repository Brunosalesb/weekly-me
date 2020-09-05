import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Activity from './pages/activity/activity';

const Stack = createStackNavigator();

class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Atividades" component={Activity} options={{headerTitleAlign:'center'}} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
}


export default Routes;
