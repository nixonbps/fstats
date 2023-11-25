import React from "react";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";

const AboutPage: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: "#1e1e1e", flex: 1 }}>
      <Text style={styles.title}>About FStats</Text>
      <Text style={styles.information}>
        FStats adalah sebuah aplikasi yang berisi informasi mengenai Formula 1. Aplikasi ini berisi banyak informasi mengenai Statistik pertandigan F1 mulai dari Hasil Balapan, Klasemen Driver, Klasemen Konstruktor, dan masih banyak lainnya .
      </Text>

      <Text style={styles.title}>Profile</Text>
      <Image
        source={require("../../../assets/profile.jpg")}
        style={{ width: 200, height: 200, alignSelf: "center", borderRadius: 100 }}
      />
      <Text style={styles.information}>
        Name: Nixon Bryan Paruliyan Simanjuntak {"\n"}
        NIM : 21120121140113 {"\n"}
        Kelompok : 39 {"\n"}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "#707079",
    padding: 10,
    fontWeight: "bold",
  },
  information: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 5,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
});

export default AboutPage;
