// MapScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {


  const initialRegion = {
    latitude: 41.3851,
    longitude: 2.1734,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const plantingZones = [
    { id: 1, title: 'Collserola Park', description: 'A major green area in Barcelona.', latitude: 41.4165, longitude: 2.0977 },
    { id: 2, title: 'Montjuïc', description: 'Significant green zone with ongoing tree planting.', latitude: 41.3637, longitude: 2.1650 },
    { id: 3, title: 'Tres Turons', description: 'Three hills that are focal points for urban greening.', latitude: 41.4151, longitude: 2.1571 },
    { id: 4, title: 'Eixample District', description: 'Part of the Superblock initiative.', latitude: 41.3888, longitude: 2.1614 },
    { id: 5, title: 'Ciutadella Park', description: 'Historic park with increasing green cover.', latitude: 41.3880, longitude: 2.1870 },
  ];

  const treesForSale = [
    { id: 1, name: 'Oak Tree', price: '$50' },
    { id: 2, name: 'Pine Tree', price: '$40' },
    { id: 3, name: 'Maple Tree', price: '$45' },
    { id: 4, name: 'Cherry Blossom', price: '$60' },
    { id: 5, name: 'Birch Tree', price: '$55' },
  ];

  const renderTreeItem = ({ item }) => (
    <View style={styles.treeItem}>
      <Text style={styles.treeName}>{item.name}</Text>
      <Text style={styles.treePrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {plantingZones.map(zone => (
          <Marker
            key={zone.id}
            coordinate={{ latitude: zone.latitude, longitude: zone.longitude }}
            title={zone.title}
            description={zone.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  treeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  treeName: {
    fontSize: 18,
  },
  treePrice: {
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MapScreen;
