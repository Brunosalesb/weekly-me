import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, CheckBox } from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activities = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [activities, setActivities] = useState([]);

    function getActivities() {
        firestore().collection("activities").onSnapshot((docs) => {
            let activities = [];
            docs.forEach(doc => {
                activities.push(doc.data());
            })
            setActivities(activities);
        })
    }

    function goToAddActivityScreen(id) {
        navigation.navigate('Cadastrar atividade');
    }

    function changeActivityStatus(id) {
        alert(id)
        setActivities()
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
                        <View style={styles.activityDescription}>
                            <Text>{activity.description}</Text>
                        </View>
                        {/* <CheckBox style={styles.activityStatus}
                              checked={activities[activity.id].done}

                            onValueChange={() => changeActivityStatus(activity.id)}
                        />
                        <Text>{activity.done ? "Feito!" : "A fazer"}</Text> */}
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