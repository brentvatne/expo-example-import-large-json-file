import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TBeer } from './types';

// @note: This crashes
// const beers: TBeer[] = require('./assets/data/beers.json');

export default function App() {
  const [beers, setBeers] = React.useState<TBeer[]>([]);

  // @note: This crashes
  React.useEffect(() => {
    try {
      const beersRequired: TBeer[] = require('./assets/data/beers.json');
      setBeers(beersRequired);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>length: {beers?.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
