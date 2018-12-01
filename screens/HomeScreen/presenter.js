import React from 'react';
import { View, Text, StyleSheet, StatusBar } from "react-native";
import BuyingList from "../../components/BuyingList";
import TotalAmount from "../../components/TotalAmount";
import Cycle from "../../components/Cycle";
import VendingMachine from "../../components/VendingMachine";
import Button from "../../components/Button";

export default class HomeScreen extends React.Component {
    render() {
        // console.log("HomeScreen", this.props);
        return(
            <View style={styles.container}>
                <StatusBar />

                <Text style={styles.VendingMachine}> VendingMachine</Text>

                <View style={styles.VM}>
                    <VendingMachine />
                    <Button iconName="list" onPress={() => this.props.navigation.navigate('ChoosingVendingMachine')} ></Button>
                </View>

                <Text>  Buying List </Text>
 
                <View style={styles.BL}>
                    <BuyingList />
                    <View style={styles.button}>
                        <Button iconName="shopping-cart" onPress={() => {
                            if(this.props.choosedVendingMachine) {
                                this.props.navigation.navigate('ChoosingItem');
                            } else {
                                alert("자판기를 먼저 선택해 주세요!");
                            }
                        }} >
                        </Button>   
                    </View>  
                </View>

                <Text>  Time </Text>

                <View style={styles.C}>
                    <Cycle />
                    <View style={styles.button}>
                        <Button iconName="clock-o" onPress={() => {
                            if(this.props.choosedVendingMachine) {
                                this.props.navigation.navigate('ChoosingCycle');
                            } else {
                                alert("자판기를 먼저 선택해 주세요!");
                            }
                        }} >
                        </Button>   
                    </View>  
                </View>
                
                <Text>  Buy Now </Text>

                <View style={styles.TA}>
                    <TotalAmount />
                    <View style={styles.button}>
                        <Button iconName="gift" onPress={() => {
                            console.log(this.props);
                            if(this.props.totalAmount.price && this.props.choosedCycle) {
                                this.props.navigation.navigate('pay');
                            } else if (this.props.choosedCycle) {
                                alert("선택하신 품목이 없습니다!");
                            } else {
                                alert("수령 시간을 선택해 주세요!");
                            }
                        }} >
                        </Button>   
                    </View>  
                </View>

            </View>  
      );
    }
    /*static navigationOptions = ({ navigation }) => {
        return {
            title: 'HOME',
        };
    };*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFCC',
        flexDirection: 'column',
    },
    VM: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    BL: {
        flex: 4,
        alignItems: "center",
        justifyContent: 'space-between',
    },
    C: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    TA: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    button:{
        padding: 8
    },
    VendingMachine: {
        marginTop: 20
    }
})