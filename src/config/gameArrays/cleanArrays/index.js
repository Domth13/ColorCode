import React from "react";

import { nextGameArray, nextBlankArray } from "..";

export function cleanArray(arr) {
    console.log(arr.length)

    if (arr.length < 6 ) {
        for (let i = 0; i < arr.length; i++) {
            const newArr = nextBlankArray[i]
            arr.splice(i,1,newArr)
        }

    } else {
        for (let i = 0; i < arr.length; i++) {
            const newArr = nextGameArray[i]
            arr.splice(i,1,newArr)

        }  
    } 
}