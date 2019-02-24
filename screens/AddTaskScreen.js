import React from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';


import { MonoText } from '../components/StyledText';

export default class AddTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
    title: 'Add a Task',
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style = {styles.scrollcontainer}>
      <TextInput
      style={styles.textInput}
      placeholder='Write a Task to add'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'>
      </TextInput>
      </ScrollView>
      <View style={styles.footer}>
      </View>
      <TouchableOpacity style={styles.addButton}>
       <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', padding: 100}}>

        <TextInput
          style={{width: '100%',textAlign: 'center', backgroundColor: 'powderblue'}}
          placeholder="stuff"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'yeet').join(' ')}
        </Text>

      </View>
    );
  }
}

    /*  <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>HAHA, What up the app works!</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Hello World!!!!!!!!!!!! How cool is this!?
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80c1f7',
  },
  scrollcontainer: {
    flex:1,
    marginBottom:100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput:{
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
  addButton:{
    marginBottom:25,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:15,
    marginRight:15,
    backgroundColor: '#ff7034',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  addButtonText: {
    color:'#fff',
    fontSize: 24,
  },
});
*/
