import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default class Item extends React.Component {
    /* static propTypes = {
        feed: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    }; */

    render() {
        return(
            <Text> {this.props.id} {this.props.name} </Text>
        ); 
    }
}

/* const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5E1A5',
        flexDirection: 'column',
    },
    feeds: {
        alignItems: "center",
    }
}); */

    