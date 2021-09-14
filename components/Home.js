import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from "react-native";

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: 'Zombies', rating: 5, body: 'Run for your life!!!', key: '1'},
        { title: 'Commandos', rating: 4, body: 'Aim at the head!!', key: '2'},
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '3' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '4' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '5' },
    ])
    const onPressHandler = () => {
        navigation.navigate('ReviewDetails');
        // Or use
        // navigation.push('ReviewDetails');
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ReviewDetails', item)}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
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
