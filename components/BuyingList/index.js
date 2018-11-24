import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 

const mapStateToProps = (state, ownProps) => {
    const { choosingItems: { buyingLists } } = state;
    return {
        buyingLists
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            dispatch(ChoosingItemsActions.reset());
        }        
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);