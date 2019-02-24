import React from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Note from '../components/Note';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {
    let notes = this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyval={key} val={val}
              deleteMethod={()=> this.deleteNote(key)} />
    });
    return (
      <View style={styles.container}>
      <ScrollView style = {styles.scrollcontainer}>
      <TextInput
      style={styles.textInput}
      onChangeText={(noteText)=> this.setState({noteText})}
      value={this.state.noteText}
      placeholder='Write a Task to add'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'>
      </TextInput>
      {notes}
      </ScrollView>
      <View style={styles.footer}>
      </View>
      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
       <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear()+
        "/"+(d.getMonth()+1)+
        "/"+ d.getDate()+
        "/"+ d.getHours()+
        ":"+ d.getMinutes()+
        ":"+ d.getSeconds(),
        'note': this.state.noteText
      });
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText:''});

    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    zIndex: 0,
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
    paddingTop:5,
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
