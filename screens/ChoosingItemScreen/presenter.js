import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Item from '../../components/Items'

export default class ChoosingItemScreen extends React.Component {
    static propTypes = {
        feeds: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    };

    render() {
        const { feeds } = this.props;
        return(
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.feeds}>
                {
                    feeds ? 
                    feeds.map(item => (
                        <Item key={item.id} {...item}/>
                        )) 
                    : null
                }
            </ScrollView>
          </View>  
        );
    }
    /*static navigationOptions = ({ navigation }) => {
        return {
            title: '골라 골라!',
        };
    };*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5E1A5',
        flexDirection: 'column',
    },
    feeds: {
        alignItems: "center",
    }
});