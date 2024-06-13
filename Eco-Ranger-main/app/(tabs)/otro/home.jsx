import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Home() {
  return (

    <View style={styles.container}>


    
    
      <Text style={styles.greeting}>Hola, John!</Text>
      <Text style={styles.subGreeting}>Ten un buen día</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        placeholderTextColor="#ccc"
      />
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Tareas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mis archivos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Carpetas</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <View style={styles.folderCard}>
          <Text style={styles.folderCardTitle}>Archivos Personales</Text>
          <Text style={styles.folderCardSubtitle}>Hace 12 horas</Text>
        </View>
        <View style={styles.folderCard}>
          <Text style={styles.folderCardTitle}>Archivos Personales</Text>
          <Text style={styles.folderCardSubtitle}>Hace 12 horas</Text>
        </View>
      </ScrollView>
      <View style={styles.recentFiles}>
        <Text style={styles.recentFilesTitle}>Archivos recientes</Text>
        <View style={styles.file}>
          <Text style={styles.fileName}>Partida de nacimiento</Text>
          <Text style={styles.fileTime}>Hace 12 horas</Text>
        </View>
        <View style={styles.file}>
          <Text style={styles.fileName}>Partida de nacimiento</Text>
          <Text style={styles.fileTime}>Hace 12 horas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop:40,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreeting: {
    fontSize: 16,
    color: '#2ecc71',
  },
  searchBar: {
    marginVertical: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#E0F7E9',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    color: '#000',
    fontWeight: 'bold',
  },
  scrollView: {
    marginVertical: 20,
  },
  folderCard: {
    backgroundColor: '#2ecc71',
    padding: 20,
    borderRadius: 10,
    marginRight: 20,
  },
  folderCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  folderCardSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  recentFiles: {
    marginVertical: 20,
  },
  recentFilesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  file: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  fileName: {
    color: '#000',
  },
  fileTime: {
    color: '#2ecc71',
  },
});
