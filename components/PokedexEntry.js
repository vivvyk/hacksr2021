import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


export default class PokedexEntry extends Component {
    render() {
        return (
            <View style={styles.pokedexEntry}>
                <Image
                    style={styles.image}
                    source={{
                        uri: this.props.url,
                    }}
                />
                <Text style={styles.pokemonLabel}>{this.props.name}</Text>
                <Text>{this.props.type}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pokedexEntry: {
        alignItems: 'center',
        marginTop: 20
    },

    image: {
        width: 200,
        height: 200,
        margin: 'auto',
    },
    pokemonLabel: {
        fontWeight: 'bold',
        fontSize: 15
    },
});