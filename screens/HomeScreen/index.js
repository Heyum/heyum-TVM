import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    console.log("HomeScreen mapStateToProps");    
    const { choosingVendingMachine: { choosedVendingMachine } } = state;
    const { choosingItems: { totalAmount } } = state;
    const { choosingCycle: { choosedCycle } } = state;
    return {
        choosedVendingMachine,
        totalAmount,
        choosedCycle
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("HomeScreen mapDispatchToProps");    
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);