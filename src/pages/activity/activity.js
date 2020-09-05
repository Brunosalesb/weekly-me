import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";

function name(params) {

}

class Activity extends Component {
    state = {
        activities: []
    }
    constructor(props) {
        super(props);
        firestore().collection("activities").onSnapshot(docs => {
            let activities = [];
            docs.forEach(doc => {
                activities.push(doc.data())
            })
            this.setState({ activities })
            console.log(activities[0].hour)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.activities}
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
            </View>
        )
    }
}

export default Activity;