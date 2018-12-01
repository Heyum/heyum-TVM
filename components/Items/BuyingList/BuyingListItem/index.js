import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("BuyingListItem");
        
        return(
            <Button 
                title={
                    this.props.name +  ": " + this.props.price + "원" +  " " + this.props.count + "개"
                }
                onPress={() => alert("well done!")}
            >
            </Button>
        ); 
    }
}

export default Item;
    