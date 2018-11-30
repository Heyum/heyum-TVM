import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 
const mapStateToProps = (state, ownProps) => {
    console.log("BuyingList mapStateToProps");
    const { choosingItems: { buyingLists } } = state;
    return {
        buyingLists
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("BuyingList mapDispatchToProps");
    return {
              
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);