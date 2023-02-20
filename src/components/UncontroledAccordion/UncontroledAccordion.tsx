import React, {useReducer, useState} from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string;
}
type ActionType = {
    type: string
}
const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state
    }
    return state
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/*<AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => { dispatch({type: 'TOGGLE-COLLAPSED'})}}
                            title={props.titleValue}
            />

            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={() => {
            props.onClick()
        }}>{props.title}</h1>
    );
}

const liStyle = {
    listStyleType: 'none'
}

function AccordionBody() {
    return (
        <ul style={liStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
