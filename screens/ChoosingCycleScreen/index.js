import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingCycleActions } from "../../redux/modules/choosingCycle";
import { actionCreators as ChoosingItemsActions } from "../../redux/modules/choosingItems";
 

const mapStateToProps = (state, ownProps) => {
    console.log("ChoosingCycleScreen mapStateToProps");    
    const { choosingCycle: { cycles } } = state;
    return {
        cycles
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ChoosingCycleScreen mapDispatchToProps");    
    return {
        initApp: () => {
            dispatch(ChoosingCycleActions.setCycles());
        },
        chooseCycle: (item) => {
            dispatch(ChoosingCycleActions.chooseCycle(item));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);