import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const { choosingItems: { buyingLists } } = state;
    return {
        buyingLists
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    dispatch(ChoosingItemsActions.reset());
    return {
        initApp: (item) => {
            dispatch(ChoosingItemsActions.chooseItem(item));
        }        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);