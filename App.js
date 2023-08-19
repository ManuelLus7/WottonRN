import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cotizador de Seguros de Caución</Text>
      <Text style={styles.subtitle}>Desarrollado por:</Text>
      <Text style={styles.info}>Manuel Lus</Text>
      <Text style={styles.info}>Comisión: 55490</Text>
      <Text style={styles.info}>CoderHouse</Text>
      <Text style={styles.description}>
        Hola Coder!, Bienvenidos a mí aplicación de cotización de seguros.
             </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});

export default App;
