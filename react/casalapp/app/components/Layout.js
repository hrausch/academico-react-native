import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente Header
export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Meu App - Header</Text>
    </View>
  );
};

// Componente NavBar
export const NavBar = () => {
  return (
    <View style={styles.nav}>
      <Text style={styles.navItem}>Início</Text>
      <Text style={styles.navItem}>Sobre</Text>
      <Text style={styles.navItem}>Contato</Text>
    </View>
  );
};

// Componente Carrousel
export const Carrousel = () => {
  return (
    <View style={styles.carousel}>
      <Text style={styles.carouselItem}>Imagem 1</Text>
      <Text style={styles.carouselItem}>Imagem 2</Text>
      <Text style={styles.carouselItem}>Imagem 3</Text>
    </View>
  );
};

// Componente Conteudo
export const Conteudo = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Conteúdo Principal</Text>
      <Text>Este é o conteúdo da aplicação.</Text>
    </View>
  );
};

// Componente Footer
export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 - Meu App</Text>
    </View>
  );
};

// Componente principal Home (padrão)
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NavBar />
      <Carrousel />
      <Conteudo />
      <Footer />
    </View>
  );
}

// Estilos compartilhados
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#0077cc',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 16,
  },
  carousel: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  carouselItem: {
    marginBottom: 5,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    padding: 15,
    backgroundColor: '#0077cc',
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
  },
});
