import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
  
class TotalAmount extends Component{

    render(){
        return(
            <View style={styles.list}>
                {
                    this.props.totalAmount.price > 0 ? 
                    <Item {...this.props} />
                    : null
                }
            </View>
        );
    }
}

class Item extends React.Component {

    render() {
        console.log("TotalAmountItem");
        
        return(
            <Text style={styles.TAT}>
                {"총 " + this.props.totalAmount.price + "원"}
            </Text>
        ); 
    }
}


const styles = StyleSheet.create({
    list:{
        backgroundColor: "white",
        width: 200,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        justifyContent: 'center',
        alignItems: 'center'
    },
    TAT: {
        // flex: 1 -> 위 아래로 가득 차는 현상이 발생해 제거(justigyContent를 적용 받지 못함)
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
});
  

export default TotalAmount;