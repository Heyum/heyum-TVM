import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("ChoosingCycleScreenItems");
        // console.log("Item", this.key); 

        const pickedItem = {
            id: this.props.id,
            name: this.props.name
        } 
        
        return(
            <Button 
                title={ pickedItem.name }
                onPress={ () => {
                    this.props.chooseCycle(pickedItem); 
                    this.props.navigation.goBack();
                } }
            >
            </Button>
        ); 
    }
}


export default Item;
    