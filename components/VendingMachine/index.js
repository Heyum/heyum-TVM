import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Button from "../Button";
  
const { height, width } = Dimensions.get("window");

class VendingMachine extends Component{
    render(){
        return(
            <View style={styles.VM}>
                <View style={styles.padding}>
                    <View style={styles.list}>
                        <TextInput style={styles.input} placeholder={"I want this vending machine"} />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button iconName="list" onPress={() => alert("it works!")} ></Button>
                </View>        
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    VM: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    list:{
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        width: 300,
        height: 50,
    },
    button:{
        padding: 8
    },
    input:{
        padding: 20
    },
    padding:{
        padding : 8
    }
});
  
  

export default VendingMachine;