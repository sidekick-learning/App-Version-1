import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class Task extends React.Component {


  render(){

    return(

      <View key={this.props.keyval} style={styles.task}>

        <Text style={styles.taskText}>{this.props.val.title}</Text>
        <Text style={styles.taskText}>{this.props.val.due_date}</Text>
        <Text style={styles.taskText}>{this.props.val.class}</Text>

      </View>

      // <Text style={styles.noteText}>{this.props.title}</Text>
      // <Text style={styles.noteText}>{this.props.due_date}</Text>

      // <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
      // <Text style={styles.noteDeleteText}>-</Text>
      // </TouchableOpacity>
      
    );
  }
}

const styles = StyleSheet.create({
  task: {
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    //borderBottomWidth: 2,
    //borderBottomColor:'#ededed',
    borderRadius: 1000,
  },
  taskText: {
    paddingLeft: 20,
    //borderLeftWidth: 10,
    borderLeftColor: 'black',
    backgroundColor: 'red',
    color: 'blue',
    //borderRadius: 50,
    
  },
  taskDelete:{
    backgroundColor: '#ff7034',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  taskDeleteText: {
    color:'white',
  },
});
