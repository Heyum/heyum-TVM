import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("ChoosingScreenItem");

        const pickedItem = {
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            count: this.props.count
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

export default Item;
    