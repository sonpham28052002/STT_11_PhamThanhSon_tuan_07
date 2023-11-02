import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function screen_01({ navigation }) {
  var [email, setEmail] = React.useState("sonpham280502002@gmail.com");
  var a = [];
  React.useEffect(()=>{
    fetch("https://653f16559e8bd3be29dfed17.mockapi.io/todos")
    .then((x) => x.json())
    .then((data) => {a=data});
  },[])

  var getAccount = () => {
    if (a.filter((item) => item.email == email).at(0) != undefined) {
      let account = a.filter((item) => item.email == email).at(0);
      navigation.navigate("screen_02", account);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <Image
        style={{ height: 200, width: 200, marginTop: 150 }}
        source={require("../image/06815f4508d7df8986c6.jpg")}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>MANAGE YOUR TASK</Text>
      <View style={{ marginTop: 50 }}>
        <MaterialCommunityIcons
          style={{ position: "absolute", top: 10, left: 5 }}
          name="email-outline"
          size={24}
          color="black"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}

          style={{
            height: 40,
            width: 300,
            borderColor: "black",
            borderWidth: 1,
            paddingLeft: 30,
            borderRadius: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={getAccount}
        style={{
          backgroundColor: "#00BDD6",
          height: 50,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
