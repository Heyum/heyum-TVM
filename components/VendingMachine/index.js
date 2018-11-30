import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as choosingVendingMachineActions } from "../../redux/modules/choosingVendingMachine";

const mapStateToProps = (state, ownProps) => {
    console.log("VendingMachine mapStateToProps", state);
    const { choosingVendingMachine: { choosedVendingMachine } } = state;
    return {
        choosedVendingMachine
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("VendingMachine mapDispatchToProps");
    return {
        initApp: () => {
            dispatch(choosingVendingMachineActions.reset());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);