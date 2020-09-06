import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const AddActivity = () => {


    const [activity, setActivity] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.inputsView}>
                <TextInput style={styles.activityDescriptionInput}></TextInput>
                <TouchableOpacity
                    onPress={null}
                    style={styles.addInput}
                >
                    <Text style={{ color: 'white' }}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddActivity;