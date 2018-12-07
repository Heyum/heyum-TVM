import React from 'react';
import { View, StyleSheet, ScrollView, Button, Dimensions, Platform, Text } from "react-native";
import PropTypes from "prop-types";

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
                <View style={styles.CCS_text}>
                    <Text style={styles.CCST}> 수령시간 선택 </Text>
                </View>
                <View style = {styles.lineStyle} />
                <View style={styles.list}>
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
            </View>  
        );
    }
    /*static navigationOptions = ({ navigation }) => {
        return {
            title: '골라 골라!',
        };
    };*/
}

class Item extends React.Component {

    render() {
        console.log("ChoosingCycleScreenItems");
        // console.log("Item", this.key); 

        const pickedItem = {
            id: this.props.id,
            name: this.props.name
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseCycle(pickedItem); 
                    this.props.navigation.goBack();
                } }
            >
            </Button>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    feeds: {
        alignItems: "center",
    },
    list:{
        backgroundColor: "white",
        flex: 7.5,
        borderRadius: 10,
        marginHorizontal: 20,
        margin: 10,
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset:{
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    CCS_text: {
        flex: 0.5,
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    CCST: {
        // flex: 1 -> 위 아래로 가득 차는 현상이 발생해 제거(justigyContent를 적용 받지 못함)
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#ffa760',
        marginTop: 10,
        marginHorizontal: 20,
   }
});