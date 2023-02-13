import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontroledAccordion/UncontroledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {ControlledInputWithFixedValue} from "./components/ControlledInput/ControlledInputWithFixedValue";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {GetValueOfInputByClicked} from "./components/GetValueByClicked/GetValueOfInputByClicked";
import {ControlledSelect} from './components/ControlledSelect/ControlledSelect';

function App() {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // let [switchOn, setSwitchOn] = useState<boolean>(true)
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const names = [
        {title:'Vlad', value: 1},
        {title:'Katya', value: 2},
        {title:'Alex', value: 3},
        {title:'Anya', value: 4},
        {title:'Vanya', value: 5}
    ]
    const onClickHandlerAccordion = (value: number) => console.log(value)
    return (
        <div className="App">
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}
                       items={names}
                       onClick={onClickHandlerAccordion}
            />
            {/*<UncontrolledRating/>*/}
            {/*<OnOff onChange={setSwitchOn} on={switchOn}/>*/}
            {/*<UncontrolledAccordion titleValue={'Numbers'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<ControlledInputWithFixedValue value={'Value of input'}/>*/}
            {/*<UncontrolledInput/>*/}
            {/*<GetValueOfInputByClicked/>*/}
            {/*<ControlledSelect/>*/}
        </div>
    );
}

export default App;
