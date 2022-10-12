import { View, Text, StyleSheet, Button } from "react-native";


export const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Hello in Home Page</Text>
      
      <View style={styles.btn}>
      <Button 
        title="Go to actions"
        onPress={() => {
          navigation.navigate("Actions");
        }}
      />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex:1,
    flexDirection:'column',
    alignItems:'center',
  },
  txt:{
    textAlign:'center',
    fontSize:25,
    marginBottom:50,
    marginTop:20
  },
  btn:{
    width:'70%',
    margin:40,
  }
});