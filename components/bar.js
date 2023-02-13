import { View, StyleSheet } from "react-native";
import Box from "../components/box";

export default function Bar() {
  return (
    <View style={styles.bar}>
      <Box />
      <Box />
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    // backgroundColor:'violet',
    backgroundColor:'#fff',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'

  }
});
