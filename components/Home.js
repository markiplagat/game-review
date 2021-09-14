import React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('ReviewDetails');
        // Or use
        // navigation.push('ReviewDetails');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home page</Text>
            <Button onPress={onPressHandler} title='Review Details' />
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
