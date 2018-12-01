import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("TotalAmountItem");
        
        return(
            <Button 
                title={" 총 " + this.props.totalAmount.price + "원 입니다."}
                onPress={() => alert("well done!")}
            >
            </Button>
        ); 
    }
}

export default Item;
    