
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView} from 'react-native';
import * as firebase from 'firebase';
import {List, ListItem} from 'native-base';
import { firebaseConfig } from '../config';
import Constants from 'expo-constants';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default class Screen2 extends React.Component{
  state={
    userlist:[]
  }
  componentDidMount(){
      const userDetails = firebase.database().ref("user_Details");
      userDetails.on("value",datasnap=>{
        //console.log(Object.values(datasnap.val()))
        if(datasnap.val()){
        this.setState({userlist:Object.values(datasnap.val()) })
        }

      })
    }
removedata(){
  firebase.database().ref("user_Details").remove()
  this.setState({userlist:[]})
  Alert.alert('Data Removed Succesfully!')
}
render(){
//console.log(this.state)
const myUsers = this.state.userlist.map(item=>{
  return(

        <ListItem>
          <Text>
            User Name:{item.user_name}_
            Password:{item.password}_
            Number:{item.mobile_number}_
            Mail_ID:{item.mail_id}_
            Address:{item.address}_
            City:{item.city}
          </Text>
        </ListItem>

  )
})
  return (
    <View style={styles.container}>
    <ScrollView>
      <List>
      {myUsers}
      </List>
    </ScrollView>

    <TouchableOpacity style={styles.button}
    onPress={()=>this.removedata()}
    >
      <Text style={styles.text}>Delete</Text>
     </TouchableOpacity>
    </View>

  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',alignItems:'center',justifyContent:'center',
    paddingTop:Constants.statusBarHeight
  },
  button:{
    height:40,
    width:100,
    fontSize:10,
    marginRight:10,
    marginTop:20,
    marginBottom:50,
    backgroundColor:"#03c4a1",
    borderColor:"#03c4a1",
    fontWeight:"bold",
    borderWidth:2,
    borderRadius:10
  },
  text:{
    textAlign:'center',
    paddingTop:7,
    paddingBottom:5,
    paddingLeft:5,
    paddingRight:5,
    color:"white"
  }
});
