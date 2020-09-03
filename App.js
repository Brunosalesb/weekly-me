import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firestore, { firebase } from "@react-native-firebase/firestore";

class App extends Component {
  state = {
    activities: {
      description: "",
      hour: ""
    }
  }
  constructor(props){
    super(props);
      // this.getActivity();
      this.subscriber = firestore().collection("activities").doc("ETSwxGlBB2ogAkK4kRPv").onSnapshot(doc => {
        this.setState({
          activities: {
            description: doc.data().description,
            hour: doc.data().hour
          }
        })
      }) 
  }

  getActivity = async () => {
    const teste = await firestore().collection("activities").doc("ETSwxGlBB2ogAkK4kRPv").get()
    alert(teste.data().description);
  }

  render() {
    return (
      <View>
        <Text>Atividade: {this.state.activities.description}</Text>
      </View >
    );
  };
}


export default App;
