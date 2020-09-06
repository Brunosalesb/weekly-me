import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, CheckBox } from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activities = () => {

    const navigation = useNavigation();

    const [activities, setActivities] = useState([]);

    function getActivities() {
        firestore().collection("activities").onSnapshot((docs) => {
            let activities = [];
            let idsCollection = [];
            docs.forEach(doc => {
                idsCollection.push(doc.id);
                activities.push(doc.data());
            })
            addIdToActivities(idsCollection, activities);
            setActivities(activities);
        })
    }

    function addIdToActivities(ids, activities) {
        for (let i = 0; i < activities.length; i++) {
            activities[i].id = ids[i];
        }
    }

    function goToAddActivityScreen(activity) {
        navigation.navigate('Cadastrar atividade', { activity });
    }

    function deleteActivity(id) {
        firestore().collection('activities').doc(id).delete();
    }

    useEffect(() => {
        getActivities();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={activities}
                keyExtractor={activity => String(activity.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: activity }) => (
                    <>
                        <TouchableOpacity
                            style={styles.activityDescription}
                            onPress={() => goToAddActivityScreen(activity)}
                        >
                            <Text>{activity.description}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteActivity(activity.id)}
                        >
                            <Icon style={styles.trashIcon} name="trash" size={20} color="red" />
                        </TouchableOpacity>
                    </>
                )}
            />
            <View style={styles.pageButtons}>
                <TouchableOpacity
                    onPress={goToAddActivityScreen}
                >
                    <Icon name="plus-circle" size={40} color="green" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Activities;