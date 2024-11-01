import ArrayStateVariables from "./ArrayStateVariables";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariables from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunction from "./PassingFunction";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

const sayHello = () => {
    alert("hello");
}

export default function Lab4() {
    return (
        <div id="wd-lab4">
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunction theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariables />
            <ObjectStateVariable />
            <ArrayStateVariables />
            <ParentStateComponent />
            <ReduxExamples />
        </div>
    );
}

