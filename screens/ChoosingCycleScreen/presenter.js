import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Item from '../../components/Items/Cycle/ChoosingCycleScreenItem'

export default class ChoosingCycleScreen extends React.Component {
    static propTypes = {
        cycles: PropTypes.array,
        chooseCycle: PropTypes.func.isRequired,
    };

    render() {

        const { cycles } = this.props;
        console.log("ChoosingCycleScreen", this.props);

        return(
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.feeds}>
                {
                    cycles ? 
                    cycles.map(item => (
                        <Item key={item.id} {...item} {...this.props}/>
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