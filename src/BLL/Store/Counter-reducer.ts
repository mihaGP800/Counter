import {Dispatch} from 'redux';
import {AppStateType} from './store';

const initialState = {
    startValue: 0,
    maxValue: 3,
    counterStep: 1,
    num: 0,
    error: ''
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, num: state.num + state.counterStep}
        case 'RESET-VALUE':
            return {...state, num: state.startValue}
        case 'CHOOSE-START-VALUE':
            return {...state, startValue: action.payload.startValue}
        case 'CHOOSE-MAX-VALUE':
            return {...state, maxValue: action.payload.maxValue}
        case 'CHOOSE-COUNTER-STEP':
            return {...state, counterStep: action.payload.counterStep}
        case 'SHOW-ERROR':
            return {...state, error: action.payload.error}
        default:
            return state
    }
}
export type ActionTypes = ChooseValueType | IncValueType | ResetValueType | MaxValueType | CounterStepType | SetErrorType
type ChooseValueType = ReturnType<typeof chooseStartValue>
type MaxValueType = ReturnType<typeof chooseMaxValue>
type CounterStepType = ReturnType<typeof chooseCounterStep>
type SetErrorType = ReturnType<typeof showError>
type IncValueType = ReturnType<typeof incValue>
type ResetValueType = ReturnType<typeof resetValue>

//ActionCreaters
export const chooseStartValue = (startValue: number) => ({type: 'CHOOSE-START-VALUE', payload: {startValue}} as const)
export const chooseMaxValue = (maxValue: number) => ({type: 'CHOOSE-MAX-VALUE', payload: {maxValue}} as const)
export const chooseCounterStep = (counterStep: number) => ({type: 'CHOOSE-COUNTER-STEP', payload: {counterStep}} as const)
export const showError = (error: string) => ({type: 'SHOW-ERROR', payload: {error}} as const)
export const incValue = () => ({type: 'INC-VALUE'} as const)
export const resetValue = () => ({type: 'RESET-VALUE'} as const)

//ThunkCreaters
// export const chooseStartValueTC = (startValue: number) => (dispatch: Dispatch, getState: () => AppStateType) => {
//     localStorage.setItem('counterStartValue', JSON.stringify(startValue))
//     dispatch(chooseStartValue(startValue))
// }
//
// export const getStartValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
//     const localStartAsString = localStorage.getItem('counterStartValue')
//     localStartAsString && dispatch(chooseStartValue(JSON.parse(localStartAsString)))
// }

//Selectors
export const selectorStartValue = (state: AppStateType) => state.counter.startValue
export const selectorMaxValue = (state: AppStateType) => state.counter.maxValue
export const selectorCounterStep = (state: AppStateType) => state.counter.counterStep
export const selectorNum = (state: AppStateType) => state.counter.num
export const selectorError = (state: AppStateType) => state.counter.error






