import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firestore, { firebase } from "@react-native-firebase/firestore";

class App extends Component {
  state = {
    activities: []
  }

  constructor(props) {
    super(props);
    // this.getActivity();
    this.subscriber = firestore().collection("activities").onSnapshot(docs => {
      let activities = []
      docs.forEach(doc => {
        activities.push(doc.data())
      })
      this.setState({ activities })
    })
  }

  getActivity = async () => {
    const teste = await firestore().collection("activities").doc("ETSwxGlBB2ogAkK4kRPv").get()
    alert(teste.data().description);
  }

  render() {
    return (
      <View>
        {this.state.activities.map((activity, index) =>
          <View key={index}>
            <Text>Atividade - {activity.description}</Text>
          </View>
        )}
        {/* <Text>Atividade: {this.state.activities.description}</Text> */}
      </View >
    );
  };
}


export default App;
