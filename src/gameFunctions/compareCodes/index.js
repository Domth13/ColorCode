import React from 'react';
import uuid from 'react-native-uuid';


export function compareCode ( code, userCode, ordered) {

    function fisherYatesShuffle(arr){
        for(var i =arr.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) ); //random index
            [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
        }
    }

    const result = []
        
    for (let j = 0; j < code.length; j++) {
        const codeColor = code[j].color
        const userColor = userCode[j].color

        if (codeColor === userColor) {
            const resultColor = {id: uuid.v4(), color: 'green'}
            result.push(resultColor)
        } else { 
            for (let k = code.length -1; k > -1; k--) {
                if (code[k].color === userColor) {
                    const resultColor = {id: uuid.v4(), color: 'orange'}
                    result.push(resultColor)
                    break
                } else {
                    if (k === 0) {
                        const resultColor = {id: uuid.v4(), color: 'black'}
                        result.push(resultColor)
                    }
                    
                    
                 }
            }
        }     
    } 
    if (ordered.bool) {
        return result
    } else {
        fisherYatesShuffle(result)
        return result
    }

    
        
   

}
