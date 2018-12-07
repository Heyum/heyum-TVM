import React from 'react';
import { View, StyleSheet, ScrollView, Button, Dimensions, Platform, Text } from "react-native";
import PropTypes from "prop-types";

const { height, width } = Dimensions.get("window");

class ChoosingVMScreen extends React.Component {
    static propTypes = {
        vendingMachines: PropTypes.array,
        chooseVendingMachine: PropTypes.func.isRequired,
        resetByVMChoice: PropTypes.func.isRequired
    };

    render() {

        const { vendingMachines } = this.props;
        console.log("ChoosingVMScreen this.props");

        return(
            <View style={styles.container}>
                <View style={styles.CVS_text}>
                    <Text style={styles.CVST}> 자판기 목록 </Text>
                </View>
                <View style = {styles.lineStyle} />
                <View style={styles.list}>
                    <ScrollView contentContainerStyle={styles.feeds}>
                        {
                            vendingMachines ? 
                            vendingMachines.map(item => (
                                <Item key={item.vend_id} {...item} {...this.props}/>
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
        console.log("ChoosingVMScreenItems");

        const pickedItem = {
            id: this.props.vend_id,
            name: this.props.vend_location
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseVendingMachine(pickedItem); 
                    this.props.resetByVMChoice(); 
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
    CVS_text: {
        flex: 0.5,
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    CVST: {
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

export default ChoosingVMScreen;