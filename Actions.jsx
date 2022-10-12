import { View, Text, Button ,StyleSheet} from "react-native";

export const Actions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}> Hello we are in actions page What you need </Text>
         
        <View style={styles.btn}>
        <Button
        title="Open Camera "
        onPress={() => {
        navigation.navigate("MyCamera");
        }}
      />
      </View> 

<View style={styles.btn}>
<Button
        title="Open img PICker"
        onPress={() => {
          navigation.navigate("img");
        }}
      />
</View>
     <View style={styles.btn}>
     <Button
        title="Open Browser"
        onPress={() => {
          navigation.navigate("Browser");
        }}
      />
     </View>
      
    </View>
  );
};
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
    marginBottom:30,
    marginTop:20
  },
  btn:{
    width:'70%',
    margin:20,
  }
});