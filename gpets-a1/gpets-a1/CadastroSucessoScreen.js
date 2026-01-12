import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function CadastroSucessoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.centerContent}>
        <View style={styles.successContainer}>
          <Text style={styles.successTitle}>{"✓"}</Text>
          <Text style={styles.successMessage}>{"Cadastro realizado com sucesso!"}</Text>
          
          <Text style={styles.successSubtitle}>
            {"Agora você faz parte da nossa comunidade. Faça login para começar a usar o GPETS!"}
          </Text>

          <TouchableOpacity
            style={[styles.btnAction, { marginTop: 40 }]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.btnText}>{"Ir para Login"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnGray, { marginTop: 15 }]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>{"Voltar para Home"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}