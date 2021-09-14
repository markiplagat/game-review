import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const Home = () => {
    return(
        <View style={styles.container}>
            <Text>Home page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
});

export default Home;
