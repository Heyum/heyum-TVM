import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 

const mapStateToProps = (state, ownProps) => {
    console.log("ChoosingItemScreen mapStateToProps");    
    const { choosingItems: { feeds } } = state;
    return {
        feeds
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ChoosingItemScreen mapDispatchToProps");    
    return {
        initApp: () => {
            dispatch(ChoosingItemsActions.setFeeds());
        },
        pickItem: (item) => {
            dispatch(ChoosingItemsActions.chooseItem(item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);