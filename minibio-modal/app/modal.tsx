import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Mais sobre mim</Text>
        
        <Text style={styles.topic}>🚀 Interesses:</Text>
        <Text style={styles.text}>Desenvolvimento de Software, Design Thinking e POO.</Text>
        
        <Text style={styles.topic}>💼 Projetos em destaque:</Text>
        <Text style={styles.text}>Desenvolvimento do app de finanças pessoais "POUP".</Text>
        
        <Text style={styles.topic}>🏋️ Hobbies:</Text>
        <Text style={styles.text}>Treinar na academia, desenhar e ler.</Text>
        
        <Text style={styles.topic}>📍 Local:</Text>
        <Text style={styles.text}>Recife, PE</Text>

        {/* Botão atualizado para forçar a volta para a tela inicial */}
        <Pressable onPress={() => router.navigate('/')} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.6)' 
  },
  modalContent: { 
    width: '85%', 
    backgroundColor: 'white', 
    padding: 25, 
    borderRadius: 12, 
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20,
    textAlign: 'center'
  },
  topic: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#007BFF'
  },
  text: { 
    fontSize: 15, 
    marginBottom: 5,
    color: '#444'
  },
  closeButton: { 
    marginTop: 25, 
    alignSelf: 'flex-end', 
    padding: 10 
  },
  closeButtonText: { 
    color: '#FF3B30', 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});