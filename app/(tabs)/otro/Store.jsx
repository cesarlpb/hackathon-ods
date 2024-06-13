import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const StoreTokens = () => {
    return (
        <SafeAreaView>
            <Text style={styles.greeting}>Store</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff',
    },

  });
  



export default StoreTokens;