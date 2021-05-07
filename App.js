import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import PokedexEntry from "./components/PokedexEntry";

var database = {
  "bulbasaur": {
    "name": "Bulbasaur",
    "type": "Type: Grass",
    "image_url": 'https://cdn2.bulbagarden.net/upload/2/21/001Bulbasaur.png'
  },

  "squirtle": {
    "name": "Squirtle",
    "type": "Type: Water",
    "image_url": 'https://cdn2.bulbagarden.net/upload/3/39/007Squirtle.png'
  },

  "charmander": {
    "name": "Charmander",
    "type": "Type: Fire",
    "image_url": 'https://cdn2.bulbagarden.net/upload/7/73/004Charmander.png'
  }

}

export default function App() {
  const [text, onChangeText] = React.useState("bulbasaur");

  function checkMembership(property) {
    if (database.hasOwnProperty(text.toLowerCase())) {
      return database[text.toLowerCase()][property]
    } else {
      return ""
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <Text>Search for a pokemon!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search"
      />
      <PokedexEntry
        name={checkMembership("name")}
        type={checkMembership("type")}
        url={checkMembership("image_url")}
      >
      </PokedexEntry>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  title: {
    fontSize: 25
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
