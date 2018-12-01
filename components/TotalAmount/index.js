import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 
const mapStateToProps = (state, ownProps) => {
    console.log("ToatalAmount mapStateToProps");
    const { choosingItems: { totalAmount } } = state;
    return {
        totalAmount
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ToatalAmount mapDispatchToProps");
    return {
              
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);