import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Text style={{ fontSize: 20 }}>{"←"}</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.centerContent}>

        <Text style={styles.title}>{"BEM VINDO AO GPETS!"}</Text>
        <Text style={styles.subtitle}>{"Login como"}</Text>

        <TouchableOpacity 
          style={styles.btnAction}
          onPress={() => navigation.navigate("LoginPessoa")}
        >
          <Text style={styles.btnText}>{"Pessoa Física"}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnGray}
          onPress={() => {
            alert("Funcionalidade para ONG em desenvolvimento");
          }}
        >
          <Text style={styles.btnText}>{"ONG"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}