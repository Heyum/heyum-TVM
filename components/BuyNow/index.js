import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from "../Button";
  
class BuyNow extends Component{
    render(){
        return(
            <View style={styles.BN}>
                <View style={styles.padding}>
                    <View style={styles.list}>
                        <TextInput style={styles.input} placeholder={"   5 $ "} />
                    </View>
                </View>
                <View style={styles.button}>
                    <Button iconName="gift" onPress={() => alert("it works!")}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    BN: {
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
        width: 100,
        height: 50,
    },
    button:{
        padding: 8
    },
    padding:{
        padding: 8
    },
    input:{
        padding: 20
    }
});
  

export default BuyNow;