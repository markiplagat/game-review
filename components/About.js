import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const About = () => {
    return(
        <View style={styles.container}>
            <Text>About page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
});

export default About;
