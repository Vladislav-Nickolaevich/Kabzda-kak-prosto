import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import MyComponent from "./components/MyComponent/MyComponent";

function App() {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            {/*<Accordion titleValue={'Hello'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onClick={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}/>*/}

            <MyComponent/>
        </div>
    );
}

export default App;
