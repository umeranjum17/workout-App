import React, {Component} from 'react';
import {Text , View , StyleSheet ,TextInput , TouchableOpacity,Button,Picker} from 'react-native';

class main extends Component{
    
    render(){

    return(

        <View style={styles.container}>
        <View style={styles.button}>
        <TouchableOpacity style={{ height: 100, marginTop: 10,borderColor:'#ff6666' }}>
          <Text>My button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 100, justifyContent:'center' ,marginTop: 10 ,backgroundColor:'#ff6666'}}>
          <Text style={{padding:10}}>My button</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 100, marginTop: 10 ,borderColor:'#ff6666'}}>
          <Text>My button</Text>
        </TouchableOpacity>

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
    button:{
      alignItems:'center',
      width:'80%',
      marginTop:'7%',
      

    },
    button1:{
      alignItems:'center',
      width:'80%',
      height:'30%',
      marginTop:'7%',
      

    },
    button2:{
      alignItems:'center',
      width:'80%',
      height:'30%',
      marginTop:'7%',
      

    },
    


  });

export default main;