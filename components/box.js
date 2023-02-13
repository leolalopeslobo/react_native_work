import { Dimensions, StyleSheet, View } from 'react-native';

const {height, width} = Dimensions.get('window');

export default function Box() {
  return (
    <View style={styles.box}>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor:'#B92E2E',
    width: width/4,
    // height: height/13,
    height: height/17,
  }
});
