
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button} from 'react-native';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import {Item, Input, Label} from 'native-base';
import Constants from 'expo-constants';
import BwBgD from '../Components/BwBgD';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default class Screen1 extends React.Component{

  state={
    userName:"",
    pass:"",
    mobileNumber:"",
    mailId:"",
    adDress:"",
    ciTy:"",
    mylist:[]
  }

  details(){
    //console.log("User_Name: "+this.state.userName)
    //console.log("Password: "+this.state.pass)
    //console.log("Mobile_Number: "+this.state.mobileNumber)
    //console.log("Mail_ID: "+this.state.mailId)
    //console.log("Address: "+this.state.adDress)
    //console.log("City: "+this.state.ciTy)
      const userDetails = firebase.database().ref('user_Details');
      userDetails.push().set({
        user_name:this.state.userName,
        password:this.state.pass,
        mobile_number:this.state.mobileNumber,
        mail_id:this.state.mailId,
        address:this.state.adDress,
        city:this.state.ciTy,
        time:Date.now()


      })
      this.setState({
        userName:"",
        pass:"",
        mobileNumber:"",
        mailId:"",
        adDress:"",
        ciTy:""
      })

      Alert.alert('Data Saved Succesfully !')
  }


  render(){
        const { replace,navigate } = this.props.navigation;
  return (
    <View style={styles.container}>
          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*Username</Label>
            <Input
            value={this.state.userName}
            onChangeText={(userName)=>this.setState({userName})}
            />
          </Item>

          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*Password</Label>
            <Input
            value={this.state.pass}
            onChangeText={(pass)=>this.setState({pass})}
             />
          </Item>

          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*Mobile Number</Label>
            <Input
            value={this.state.mobileNumber}
            onChangeText={(mobileNumber)=>this.setState({mobileNumber})}/>
          </Item>

          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*Mail Id</Label>
            <Input
            value={this.state.mailId}
            onChangeText={(mailId)=>this.setState({mailId})}
            />
          </Item>

          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*Address</Label>
            <Input
            value={this.state.adDress}
            onChangeText={(adDress)=>this.setState({adDress})}
            />
          </Item>

          <Item floatingLabel last style={{marginTop:10}}>
            <Label>*City</Label>
            <Input
            value={this.state.ciTy}
            onChangeText={(ciTy)=>this.setState({ciTy})}
            />
          </Item>

          <View style={{flexDirection:"row"}}>


          <TouchableOpacity
          onPress={()=>this.details()}>
          <Text style={styles.button}>Save</Text>
          </TouchableOpacity>

          <BwBgD text='Display' color='#03c4a1' onPress={()=>navigate('Display_Info')}/>
          </View>

    </View>
  );
}
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Constants.statusBarHeight
  },
  button:{
    height:40,
    width:100,
    fontSize:10,
    marginRight:10,
    marginLeft:70,
    marginTop:20,
    backgroundColor:"#03c4a1",
    borderColor:"#03c4a1",
    textAlign:'center',
    color:"#fff",
    fontWeight:"bold",
    borderWidth:2,
    padding:10,
    borderRadius:10

  }
});
