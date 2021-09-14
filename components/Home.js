import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    title: {
        fontFamily: 'nunito-bold',
        fontSize: 20
    }
});

export default Home;
