import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import PropTypes from "prop-types";

const { height, width } = Dimensions.get("window");

class BuyingList extends Component{
    static propTypes = {
        buyingLists: PropTypes.array,
    };

    render(){
        const { buyingLists } = this.props;

        return(
            <View style={styles.list}>
                <ScrollView contentContainerStyle={styles.feeds}>
                    {
                        buyingLists ? 
                            buyingLists.map(item => (
                                <View key={item.id} style = {styles.container}>
                                    <Item {...item} />
                                    <View style = {styles.lineStyle}/>
                                </View>
                            )) 
                         : null
                    }
                </ScrollView>
            </View>
        );
    }
}


class Item extends React.Component {

    render() {
        console.log("BuyingListItem");
        
        return(
            <Text style={styles.BYT}> 
                {
                    this.props.name +  " " + this.props.price + "원" +  " " + this.props.count + "개"
                }
            </Text>
        ); 
    }
}

const styles = StyleSheet.create({
    feeds: {
        alignItems: "center"
    },
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: "center"
    },
    list:{
        backgroundColor: "white",
        flex: 1.5,
        borderRadius: 10,
        width: width - 20,
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
    BYT: {
        // flex: 1 -> 위 아래로 가득 차는 현상이 발생해 제거(justigyContent를 적용 받지 못함)
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginTop: 10,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#bbbcbf',
        marginTop: 10,
        width: width - 50,
    }
});
  

export default BuyingList;