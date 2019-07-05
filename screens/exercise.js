import React, {Component} from 'react';
import DropdownMenu from 'react-native-dropdown-menu'
import {Text , View , StyleSheet ,TextInput , TouchableOpacity,Button,Picker} from 'react-native';

class Exercise extends Component{
    constructor(props){
      super(props)
      this.state={
        
        title:'',
        weight:0,
        reps:0,

      }
    }
    render(){
    var data=[['BenchPress','DumbellPress','PullUps','Curls','TricepExtensions','ShoulderPress']]
    return(

        <View style={styles.container}>
          <View style={styles.dropDown}>
        <Picker >
            <Picker.item label="BenchPress"/>
            <Picker.item label="DumbellPress"/>
            <Picker.item label="PullUps"/>
            <Picker.item label="Curls"/>
            <Picker.item label="TricepExtensions"/>
            <Picker.item label="ShoulderPress"/>
            <Picker.item label="Pulldowns"/>


        </Picker>
        </View>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <View style={styles.button}>
        <View style={styles.button1}>
        <Button title='Add Exercise' ></Button>
        </View>

        <View style={styles.button2}>
        <Button title='End Session'></Button>
        </View>

        </View>
        </View>
    ); 
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255,255,255)',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    input: {
      
      backgroundColor: 'rgb(222,222,222)',
      alignItems: 'center',
      justifyContent: 'center',
      width:'80%',
      height:50,
      paddingHorizontal:'3%',
      marginBottom:'2%',    
    },
    dropDown: {
      marginBottom:'2%',
      backgroundColor: 'rgb(2,222,222)',
      width:'80%',
  
    },
    button:{
      flexDirection:'row',
      alignItems:'flex-end',
      width:'80%',
      marginTop:'7%'
      

    },
    button1:{
      width:'30%',
      marginLeft:'15%'
    },
    button2:{
      width:'30%',
      marginLeft:'10%'
    }

  });

export default Exercise;