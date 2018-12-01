import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("ChoosingVMScreenItems");

        const pickedItem = {
            id: this.props.id,
            name: this.props.name
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseVendingMachine(pickedItem); 
                    this.props.resetByVMChoice(); 
                    this.props.navigation.goBack();
                } }
            >
            </Button>
        ); 
    }
}

export default Item;
    