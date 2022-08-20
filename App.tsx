import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TBeer } from "./types";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

export default function App() {
  const [beers, setBeers] = React.useState<TBeer[]>([]);

  React.useEffect(() => {
    try {
      async function load() {
        // Can't import json or it gets embedded in the bundle,
        // import it as txt instead
        const assetResult = await Asset.loadAsync(
          require("~/assets/data/beers.txt")
        );
        const rawText = await FileSystem.readAsStringAsync(
          assetResult[0].localUri || ""
        );
        const beersRequired = JSON.parse(rawText) as TBeer[];
        setBeers(beersRequired);
      }

      load();
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
