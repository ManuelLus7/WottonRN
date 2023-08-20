import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logowotton.png')} // Logo de la Aplicación
        style={styles.logo}
      />
      <Text style={styles.title}>Cotizador de Seguros</Text>
      <TextInput style={styles.input} placeholder="Usuario / Email" />
      <TextInput style={styles.input} placeholder="Ingresa Tú Contraseña" secureTextEntry={true} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
      

      {/* Separación visual entre las dos secciones */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hola Coder!, Bienvenidos a mí aplicación.</Text>
        <Text style={styles.subtitle}>Desarrollada por:</Text>
        <Text style={styles.info}>Manuel Lus</Text>
        <Text style={styles.info}>Comisión: 55490</Text>
        <Text style={styles.info}>CoderHouse</Text>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6DDDD',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300, // Ajusta el ancho 
    height: 300, // Ajusta el alto 
    marginBottom: 20,
    resizeMode: 'contain', // Para ajustar el contenido del logo al tamaño del Image
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default App;
