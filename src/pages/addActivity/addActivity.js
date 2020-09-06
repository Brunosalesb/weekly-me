import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";

const AddActivity = () => {

    if (editMode)
        navigation.setOptions({ title: "Editar atividade" })

    //#region Consts
    const navigation = useNavigation();
    const route = useRoute();
    const activityToEdit = route.params.activity;
    const editMode = activityToEdit != undefined ? true : false;
    //#endregion

    const [activity, setActivity] = useState(editMode ? activityToEdit.description : null);

    function submit() {
        if (!editMode) {
            addActivity();
        } else {
            updateActivity();
        }
        navigation.navigate('Atividades');
    }

    function addActivity() {
        firestore().collection('activities').add({
            description: activity
        })
        alert('Cadastrado com sucesso!')
    }

    function updateActivity() {
        firestore().collection('activities').doc(activityToEdit.id).update({
            description: activity,
            done: false,
        })
        alert('Atualizado com sucesso!')
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
                    onPress={submit}
                    style={styles.addInput}
                >
                    <Text style={{ color: 'white' }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddActivity;