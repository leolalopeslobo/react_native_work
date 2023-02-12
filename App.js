import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bar from './components/bar';
import Onboarding from './components/onboarding';

const {height, width} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
            <StatusBar 
              backgroundColor='transparent'
              barStyle='light-content'
              hidden={false}
              translucent={true} //arranges the components below the status bar when set to 'true'
              />

      {/* <TouchableOpacity style={styles.box}
      onPress={() => console.log(height)}>

      </TouchableOpacity> */}

      <Bar />

      <View  style={styles.content}>

      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}

        <View  style={styles.sliderContent}>
          {/* <Text>sliderContent</Text> */}
          <Onboarding />
        </View>


      <View style={styles.onboardButton}>
        <TouchableOpacity style={styles.onboardbuttonStyle}><Text style={{color:'#fff'}}>Continue</Text></TouchableOpacity>
      </View>

      </View>

      <Bar style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content: {
    flex:1,
    // backgroundColor:'pink',
    backgroundColor:'#fff',
    width: width,
    height: height - (height/13 + height/13),
    alignItems:'center',
    justifyContent:'center'

  },

  box: {
    backgroundColor:'red',
    width: width/4,
    height: height/12,
  },

  footer: {
  },

  sliderContent:{
    flex: 0.85,
    // backgroundColor:'grey',
    width: '100%'
  },

  onboardButton: {
    flex:0.15,
    // flex: 0.5,
    // backgroundColor:'pink',
    alignItems:'center',
    // justifyContent:'center',
    width: '100%',
    // height: 10,
    // paddingVertical: '15%'
  },
  onboardbuttonStyle:{
    width: '65%',
    height: '45%',
    backgroundColor: '#E94057',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 17,
    fontWeight: '500',
  }
});
