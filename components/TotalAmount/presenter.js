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
            <Text>
                {" 총 " + this.props.totalAmount.price + "원 입니다."}
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
    }
});
  

export default TotalAmount;