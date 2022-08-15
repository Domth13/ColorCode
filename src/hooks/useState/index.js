import React, {createContext, useContext, useReducer} from 'react';
import { blankArray, blankGameArray, blankResultArray } from '../../config/GameColors';
import { codeLengthValues } from '../../config/Settings';

const initialState = {
    darkMode: { bool: false},
    resultOrder: { bool: false },
    codeLength: { quantity: codeLengthValues.normal},
    gameArray: { array: blankGameArray},
    userInput: { array: blankArray},
    countAttempts: { quantity: 0 },
    colorCode: { array: ''},
    resultArray: { array: blankResultArray},
    finalResult: { bool: false},
    time: { number: 0 },
}

const reducer = (state, action) => {
  switch (action.type) {

        case 'SETDARKMODE':
            return {
                ...state,
                darkMode: action.newDarkMode
            };
        case 'SETRESULTORDER':
            return {
                ...state,
                resultOrder: action.newResultOrder
        };
      case 'SETCODELENGTH':
          return {
              ...state,
              codeLength: action.newCodeLength
          };
      case 'SETGAMEARRAY':
          return {
              ...state,
              gameArray: action.newGameArray
          }
      case 'SETUSERINPUT':
          return {
              ...state,
              userInput: action.newUserInput
          }
      case 'SETCOUNTATTEMPTS':
          return {
              ...state,
              countAttempts: action.newCountAttempts
          }
      case 'SETCOLORCODE':
          return {
              ...state,
              colorCode: action.newColorCode
          }
      case 'SETRESULTARRAY':
          return {
              ...state,
              resultArray: action.newResultArray
          }
      case 'SETFINALRESULT':
          return {
              ...state,
              finalResult: action.newFinalResult
          }  
      case 'SETTIME':
          return {
              ...state,
              time: action.newTime
          }   
           
      default:
          return state;
  }
}

export const StateContext = createContext();


export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);