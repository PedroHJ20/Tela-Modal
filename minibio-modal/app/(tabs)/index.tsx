import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Pedro Henrique Jerônimo Da Silva</Text>
      <Text style={styles.bio}>Estudante do 4º período de Sistemas para Internet na UNICAP.</Text>
      <Text style={styles.bio}>Atualmente trabalhando como Auxiliar de Faturamento.</Text>

      {/* O componente Link do Expo Router atua como o botão de navegação */}
      <Link href="/modal" style={styles.button}>
        <Text style={styles.buttonText}>Ver mais detalhes</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center' 
  },
  bio: { 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 5,
    color: '#333'
  },
  button: { 
    marginTop: 20, 
    backgroundColor: '#007BFF', 
    padding: 15, 
    borderRadius: 8,
    elevation: 2 
  },
  buttonText: { 
    color: '#FFF', 
    fontWeight: 'bold',
    fontSize: 16
  }
});