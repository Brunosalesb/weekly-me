import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";

const AddActivity = () => {

    const navigation = useNavigation();

    const [activity, setActivity] = useState();

    async function addActivity() {
        await firestore().collection('activities').add({
            description: activity,
            done: false,
        })
        navigation.navigate('Atividades');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputsView}>
                <TextInput
                    style={styles.activityDescriptionInput}
                    onChangeText={text => setActivity(text)}
                    value={activity}
                >

                </TextInput>
                <TouchableOpacity
                    onPress={addActivity}
                    style={styles.addInput}
                >
                    <Text style={{ color: 'white' }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddActivity;