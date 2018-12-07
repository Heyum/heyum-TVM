import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingVendingMachineActions } from "../../redux/modules/choosingVendingMachine";

const mapStateToProps = (state, ownProps) => {
    console.log("ChoosingVMScreen mapStateToProps");    
    const { choosingVendingMachine: { vendingMachines } } = state;
    return {
        vendingMachines
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("ChoosingVMScreen mapDispatchToProps");    
    return {
        initApp: () => {
            dispatch(ChoosingVendingMachineActions.getVendingMachines());
        },
        chooseVendingMachine: (item) => {
            dispatch(ChoosingVendingMachineActions.chooseVendingMachine(item));
        },
        resetByVMChoice: () => {
            dispatch(ChoosingVendingMachineActions.resetByVMChoice());            
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);