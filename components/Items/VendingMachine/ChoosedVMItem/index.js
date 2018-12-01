import React from 'react';
import { Button } from "react-native";

class Item extends React.Component {

    render() {
        console.log("ChoosedVMItem");
        
        return(
            <Button 
                title={this.props.name}
                onPress={() => alert("well done!")}
            >
            </Button>
        ); 
    }
}

export default Item;
    