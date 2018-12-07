import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Dimensions, Platform, } from "react-native";
import PropTypes from "prop-types";
import BuyingList from "../../components/BuyingList"

const { height, width } = Dimensions.get("window");

class ChoosingItemScreen extends React.Component {
    static propTypes = {
        feeds: PropTypes.array,
        pickItem: PropTypes.func.isRequired
    };

    render() {
        const { feeds, pickItem } = this.props;
        console.log("ChoosingItemScreen this.props", this.props.pickItem);

        return(
            <View style={styles.container}>
                <View style={styles.BL_text}>
                        <Text style={styles.BLT}> 물품 목록 </Text>
                </View>
                <View style = {styles.lineStyle} />     
                <View style={styles.list}>
                    <ScrollView contentContainerStyle={styles.feeds}>
                        {
                            feeds ? // feeds({product_code, product_name, product_price})
                            feeds.map(item => (
                            <Item key={item.product_name} {...item} pick={pickItem}/>
                            )) 
                            : null
                        }
                    </ScrollView>
                </View>
                <View style={styles.BL_text}>
                        <Text style={styles.BLT}> 선택한 물품 </Text>
                </View>
                <View style = {styles.lineStyle} />     
                <BuyingList />  
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
        console.log("ChoosingScreenItem");

        const pickedItem = {
            id: this.props.product_code,
            name: this.props.product_name,
            price: this.props.product_price,
            count: 0
        } 
        
        return(
            <Button 
                title={
                    pickedItem.name +  ": " + pickedItem.price + "원"
                }
                onPress={ () => {this.props.pick(pickedItem); } }
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
        // backgroundColor: '#FFFFFF' 위에 둥근 모서리를 침범해 각지게 만드는 문제가 발생해서 제거
    },
    list:{
        backgroundColor: "white",
        flex: 4.5,
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
    BL_text: {
        flex: 0.5,
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
    lineStyle:{
        borderWidth: 1,
        borderColor:'#ffa760',
        marginTop: 10,
        marginHorizontal: 20,

   }
});

export default ChoosingItemScreen;