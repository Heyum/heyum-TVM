import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 

const mapStateToProps = (state, ownProps) => {
    const { choosingItems: { feeds } } = state;
    return {
        feeds
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initApp: () => {
            dispatch(ChoosingItemsActions.getFeeds());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);