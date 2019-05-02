import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class Task extends React.Component {

  constructor(props){
    super(props);
    //this.parseDueDate = this.parseDueDate.bind(this);
    this.state = {
      colors: ['red','blue','green'],
      selectedColor: '',
    };
  }

  // componentDidMount() {
  //   this._getRandomColor()
  // }
  
  // _getRandomColor(){
  //   var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
  //   this.setState({
  //     selectedColor: item,
  //   })
  // }

  render(){

    return(
      <View style={styles.task}>
        <Text style={styles.taskText}>{this.props.assignment.name}</Text>
        <Text style={styles.taskText}>{this.props.assignment.due_at}</Text>
        <Text style={styles.taskText}>{this.props.assignment.course_id}</Text>
      </View>

      // <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
      // <Text style={styles.noteDeleteText}>-</Text>
      // </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  task: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'blue'
  },
  taskText: {
    paddingLeft: 20,
    color: 'white',
    fontSize: 20
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
