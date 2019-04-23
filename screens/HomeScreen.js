import React from 'react';
import {
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import Task from '../components/Task';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);


//state contains the assignments that we want to display for the user
    this.state = {
      // notes: [
      //   {
      //     id: 1,
      //     title: 'homework',
      //     due_date: '4/22',
      //     class: 'calculus',
      //   },
      //   {
      //     id: 2,
      //     title: 'other homework',
      //     due_date: '4/21',
      //     class: 'physics',
      //   },
      //   {
      //     id: 3,
      //     title: 'project',
      //     due_date: '4/20',
      //     class: 'physics',
      //   }
      // ] 

      data: null,
      error: null,
      loading: false
    }
}


  //below are the functions that make API calls for our app
  //baseURL = 'https://jsonplaceholder.typicode.com/';

  getData = (ev)=>{
    this.setState({loading: true})
    this.setState({error: null});
    let url = 'https://canvas.colorado.edu/api/v1/courses/25348/assignments'
    let h = new Headers();
    h.append('Authorization', 'Bearer 10772~lxqwLkPIT4rV8vd4RhvH9E1HBBpCXIpvSOfWMR7OxcKIVZQT4MCuzpO4apAkk77p');
    h.append('per_page', 5)
    
    let req = new Request(url, {
      headers: h,
      method: 'GET'
    });
    
    fetch(req)
    .then(response => response.json())
    .then(this.showData)
    .catch(this.badStuff);

  }

  showData = (data)=>{
    this.setState({data: data});
    tasks = this.state.data.map((val, key)=>{
      return <Task key={key} keyval={key} val={val}/>});
    console.log(data);  
    this.setState({loading: false});
  }

  badStuff = (err)  => {
    this.setState({error: err.message});
  }

  
  render(){

    this.getData();

    console.log('loading')

    while(this.state.loading){};

    console.log('loaded');


    return(
      <View>

        <Button title="call api"
          onPress={this.getData} />
        
        { this.state.error && (
            <Text>
            {this.state.error}
            </Text>
        )}

        {/* {this.state.data && this.state.data.length > 0 && (
          this.state.data.map(assignment => (
            <Text key={assignment.id}>
              {assignment.name}
            </Text>
          ))
        )} */}
        {tasks}
      </View>
    );
  }


  //function to sort tasks based on due date
  // sortTasks(){
  //   var sorted = [];
  //   for(var task in this.notes){
  //     sorted.push([task, this.notes[task]]);
  //   }

  //   sorted.sort(function(a,b){
  //     return this.a[1] - this.b[1];
  //   });
  // }

}

//OLD STUFF


//   static navigationOptions = {
//     title: 'Tasks',
//   };

//   constructor(props){
//     super(props);
//     state = {
//       notes: [
//         {
//           id: 1,
//           title: 'homework',
//           due_date: '4/20',
//           class: 'calculus',
//         },
//         {
//           id: 2,
//           title: 'other homework',
//           due_date: '4/21',
//           class: 'physics',
//         }
//       ] 
//     }
//   }



//   render() {
//     let notes = this.state.map((key)=>{
//       return <Note key={key} />
//               //deleteMethod={()=> this.deleteNote(key)} />
//     });
   
//     return (
//       <View style={styles.container}>
//         <ScrollView style = {styles.scrollcontainer}>
//           {notes}
//         </ScrollView>
      


//       {/* <TextInput
//       style={styles.textInput}
//       onChangeText={(noteText)=> this.setState({noteText})}
//       value={this.state.noteText}
//       placeholder='Write a Task to add'
//       placeholderTextColor='white'
//       underlineColorAndroid='transparent'>
//       </TextInput> */}

//       <View style={styles.footer}>
//       </View>

//       {/* <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
//        <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
//        <Text style={styles.addButtonText}>+</Text>
//       </TouchableOpacity> */}
//       </View>
//     );
//   }

//   /*getDataJSON(){
//     var assignment = 
//   }*/

//   addNote(){
//     this.state.noteArray.push({'note': this.state.noteText})
//     this.setState({noteArray: this.state.noteArray})
//     this.setState({noteText: this.placeholder});
//   }

//   deleteNote(key){
//     this.state.noteArray.splice(key,1);
//     this.setState({noteArray: this.state.noteArray})
//   }
// }
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
