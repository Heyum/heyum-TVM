import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Platform } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import BuyingList from "../../components/BuyingList";
import TotalAmount from "../../components/TotalAmount";
import Cycle from "../../components/Cycle";
import VendingMachine from "../../components/VendingMachine";

export default class HomeScreen extends React.Component {
    render() {
        // console.log("HomeScreen", this.props);
        return(
            <View style={styles.container}>

                <StatusBar />
 
                <View style={styles.VM}>
                    <View style={styles.VM_text}>
                        <Text style={styles.VMT}> 벤딩머신 위치 </Text>
                    </View>                        
                    <View style = {styles.lineStyle} />
                    <View style={styles.VM_nested}>
                        <VendingMachine onPress={() => this.props.navigation.navigate('ChoosingVendingMachine')}/>
                    </View>
                </View>
 
                <View style={styles.BL}>
                    <View style={styles.BL_text}>
                        <Text style={styles.BLT}> 물품 </Text>
                    </View>     
                    <View style = {styles.lineStyle} />
                    <View style={styles.BL_nested}>
                        <BuyingList/>
                    </View>
                    <View style={styles.BL_button}>
                        <TouchableOpacity style={styles.BLB} onPressOut={() => {
                                if(this.props.choosedVendingMachine) {
                                    this.props.navigation.navigate('ChoosingItem');
                                } else {
                                    alert("자판기를 먼저 선택해 주세요!");
                                }
                        }}>
                            <FontAwesome name="plus" size={10} color="white" />
                            <Text style={styles.BLI} > 추가 </Text>
                        </TouchableOpacity>  
                    </View>  
                </View>


                <View style={styles.VM}>
                    <View style={styles.VM_text}>
                        <Text style={styles.VMT}> 시간설정 </Text>
                    </View>                        
                    <View style = {styles.lineStyle} />
                    <View style={styles.VM_nested}>
                        <Cycle onPress={() => {
                            if(this.props.choosedVendingMachine) {
                                this.props.navigation.navigate('ChoosingCycle');
                            } else {
                                alert("자판기를 먼저 선택해 주세요!");
                            }
                        }}/>
                    </View>
                </View>
            

                <View style={styles.TA}>
                    <View style={styles.BM_text}>
                        <Text style={styles.BLT}> TOTAL </Text>
                    </View>     
                    <View style = {styles.lineStyle} />
                    <View style={styles.TA_nested}>
                        <TotalAmount />
                        <TouchableOpacity style={styles.TAB} onPressOut={() => {
                            if(this.props.totalAmount.price && this.props.choosedCycle) {
                                this.props.navigation.navigate('pay');
                            } else if (this.props.choosedCycle) {
                                alert("선택하신 품목이 없습니다!");
                            } else {
                                alert("수령 시간을 선택해 주세요!");
                            }
                        }}>
                            <Text style={styles.TAI} > 결제하기 </Text>
                        </TouchableOpacity>  
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
        flex: 1.5,
        backgroundColor: '#FFFFFF',
    },
    VM_text: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    VMT: {
        // flex: 1 -> 위 아래로 가득 차는 현상이 발생해 제거(justigyContent를 적용 받지 못함)
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
    },
    VM_nested: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BL: {
        flex: 3.5,
        backgroundColor: '#FFFFFF',
    },
    BL_text: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    BLT: {
        // flex: 1 -> 위 아래로 가득 차는 현상이 발생해 제거(justigyContent를 적용 받지 못함)
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 20,
    },
    BL_nested: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BL_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BLB: {
        backgroundColor: "#ff8f33",
        borderRadius: 10,
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset:{
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 2
            }
        })
    },
    BLI: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    },
    C: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
    },
    TA: {
        flex: 1.5,
        backgroundColor: '#FFFFFF',
    },
    TA_nested: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    TAB: {
        backgroundColor: "#333f50",
        borderRadius: 10,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor:"rgb(50, 50, 50)",
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset:{
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 2
            }
        })
    },
    TAI: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#ffa760',
        marginTop: 10,
        marginHorizontal: 20,

   }
})