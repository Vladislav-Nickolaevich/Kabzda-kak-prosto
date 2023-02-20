import React from 'react'

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}
export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type){
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Wrong action type")
    }
    return state
}