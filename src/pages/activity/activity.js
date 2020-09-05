import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Activity = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const routeName = route.name;

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

    function goToNextDay() {
        let pageName;
        switch (routeName) {
            case "Segunda-feira":
                pageName = "Terça-feira";
                break;
            case "Terça-feira":
                pageName = "Quarta-feira";
                break;

            case "Quarta-feira":
                pageName = "Quinta-feira";
                break;

            case "Quinta-feira":
                pageName = "Sexta-feira";
                break;

            case "Sexta-feira":
                pageName = "Sábado";
                break;

            case "Sábado":
                pageName = "Domingo";
                break;

            case "Domingo":
                pageName = "Segunda-feira";
                break;
        }
        navigation.navigate(pageName);
    }

    function goToPreviousDay() {
        let pageName;
        switch (routeName) {
            case "Segunda-feira":
                pageName = "Domingo";
                break;
            case "Terça-feira":
                pageName = "Segunda-feira";
                break;

            case "Quarta-feira":
                pageName = "Terça-feira";
                break;

            case "Quinta-feira":
                pageName = "Quarta-feira";
                break;

            case "Sexta-feira":
                pageName = "Quinta-feira";
                break;

            case "Sábado":
                pageName = "Sexta-feira";
                break;

            case "Domingo":
                pageName = "Sábado";
                break;
        }
        navigation.navigate(pageName);
    }

    useEffect(() => {
        getActivities();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={activities}
                keyExtractor={activity => String(activity.description)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: activity }) => (
                    <View style={styles.activity}>
                        <View>
                            <Text>{activity.description}</Text>
                        </View>
                        <View>
                            <Text>{activity.hour}</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.pageButtons}>
                <TouchableOpacity
                    onPress={goToPreviousDay}
                >
                    <Icon name="chevron-left" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={null}
                >
                    <Icon name="plus" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goToNextDay}
                >
                    <Icon name="chevron-right" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Activity;