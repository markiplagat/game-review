import React from 'react';
import {StyleSheet, View, Text} from "react-native";

const ReviewDetails = ({route, navigation }) => {
    // const { title } = route.params.item;

    return(
        <View style={styles.container}>
          <Text>{navigation.getParam("title")}</Text>
            <Text>{navigation.getParam("rating")}</Text>
            <Text>{navigation.getParam("body")}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    }
});

export default ReviewDetails;
