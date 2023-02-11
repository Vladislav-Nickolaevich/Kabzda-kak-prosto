import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontroledAccordion/UncontroledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledInputWithFixedValue} from "./components/ControlledInput/ControlledInputWithFixedValue";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";

function App() {
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // let [switchOn, setSwitchOn] = useState<boolean>(true)
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return (
        <div className="App">
            {/*<Accordion titleValue={'Hello'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}

            {/*<UncontrolledRating/>*/}
            {/*<OnOff onChange={setSwitchOn} on={switchOn}/>*/}
            {/*<UncontrolledAccordion titleValue={'Numbers'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<ControlledInputWithFixedValue value={'Value of input'}/>*/}
            <UncontrolledInput/>
        </div>
    );
}

export default App;
