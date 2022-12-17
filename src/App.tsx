import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import MyComponent from "./components/MyComponent/MyComponent";
import OnOff from "./components/OnOff/OnOff";

function App() {
    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true)
    return (
        <div className="App">
            {/*<Accordion titleValue={'Hello'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}

            {/*<MyComponent/>*/}
            <OnOff onChange={setSwitchOn} on={switchOn}/>
        </div>
    );
}

export default App;
