import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as ChoosingCycleActions } from "../../redux/modules/choosingCycle";

const mapStateToProps = (state, ownProps) => {
    console.log("Cycle mapStateToProps");
    const { choosingCycle: { choosedCycle } } = state;
    return {
        choosedCycle
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("Cycle mapDispatchToProps");
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);