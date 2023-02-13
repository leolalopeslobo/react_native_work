import { StyleSheet, StatusBar, Text, View, TextInput, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Bar from '../components/bar';
import CheckBox from "expo-checkbox";

const {height, width} = Dimensions.get('window');

export default function SignUp() {

  // Checkbox Function
  const [isChecked, setIsChecked] = useState(false);

  const someAction = () => {
    console.log('Sign Up Text Clicked');
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      // console.log('dismiss keyboard');
      Keyboard.dismiss();
    }}>
  <View>
   
     <StatusBar 
               backgroundColor='transparent'
               barStyle='dark-content'
               hidden={false}
               translucent={true} //arranges the components below the status bar when set to 'true'
               />  
<Bar />
{/* TITLE */}
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.signInText}>Create Account</Text>
      </View>
      {/* TEXTINPUT EMAIL */}
      <View style={styles.textInputView}>
        <Text style={styles.textInputTitle} >Email <Text style={{color: '#EC5D70'}}>*</Text></Text>
        <TextInput 
          autoCorrect={false}
          style={styles.textInputField}/>
      </View>
      {/* TEXTINPUT PASSWORD */}
      <View style={styles.textInputView}>
        <Text style={styles.textInputTitle}>Password <Text style={{color: '#EC5D70'}}>*</Text></Text>
        <TextInput
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.textInputField}/>
      </View>
      {/* CHECKBOX */}
      <View style={styles.checkBox}>
        <CheckBox 
        color={isChecked ? "#E94057" : undefined}
          value={isChecked}
          onValueChange={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkBoxText}>Remember me</Text>
      </View>
      {/* SIGNIN BUTTON */}
      <View style={styles.onboardButton}>
        <TouchableOpacity style={styles.onboardbuttonStyle}><Text style={{color:'#fff'}}>Sign Up</Text></TouchableOpacity>
      </View>
      <Text style={{color: '#4B4B4B'}}>Or continue with</Text>
      <View style={styles.signInButton}>
        <TouchableOpacity style={styles.signInButtonView}>
          <TouchableOpacity style={styles.signInButtonStyle}><Image style={{width: '20%'}} source={require('../assets/images/facebook.png')}/><Text style={{color:'#000', marginLeft: '7%'}}>Facebook</Text></TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButtonView}>
          <TouchableOpacity style={styles.signInButtonStyle}><Image style={{width: '20%'}} source={require('../assets/images/google.png')}/><Text style={{color:'#000', marginLeft: '7%'}}>Google</Text></TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.goToLogin}>
        <Text>Have an account already?</Text>
        <Text 
          // onPress={()=> someAction()}
          // onPress={()=> navigation.navigate("Onboarding")}
          style={{color:'#EC5D70', marginLeft: '4%'}}>Sign In</Text>
      </View>
    </View>
    <Bar />
  </View>
  </TouchableWithoutFeedback>

)};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // height: '100%',
    // backgroundColor:'pink',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingVertical: '25%',
    // justifyContent:'center',
    height: height - (height/17 + height/17),
  },
  signInText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#000',
  },
  textInputView: {
  //  backgroundColor:'orange',
   width: '70%',

  },
  textInputTitle: {
    marginBottom: '1%',
    marginLeft: '8%',
    color:'#414141',

  },
  textInputField: {
    paddingVertical: '3%',
    paddingHorizontal: '8%',
    // backgroundColor: 'orange',
    fontSize: 20,
    // width: '90%',
    borderRadius: 25,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  onboardButton: {
    // flex:0.15,
    // flex: 1,
    // backgroundColor:'orange',
    // alignItems:'center',
    justifyContent:'center',
    width: '70%',
    // height: ,
    // paddingVertical: '1%'
  },
  onboardbuttonStyle:{
    // height: '26%',
    backgroundColor: '#E94057',
    alignItems:'center',
    justifyContent:'center',
    // textAlign:'center',
    borderRadius: 25,
    fontWeight: '500',
    paddingVertical: '4.5%',
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    width:'70%',
    marginLeft: '10%',
  },
  checkBoxText: {
    marginLeft: '4%',
    color: '#313030',
  },
  signInButton: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between'
  },
  signInButtonView: {
    // backgroundColor: 'red',
    paddingVertical: '2.5%',
    paddingHorizontal: '2%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 17,
  },
  signInButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goToLogin: {
    flexDirection: 'row'
  }

})