import React from "react"

export function createCode(arr, codelength) {
    const code = []
    for (let i = 0; i < codelength; i++) {
        const color = arr[Math.floor(Math.random()*arr.length)]
        const newColor = {...color, id: i+1}
        code.push(newColor)
    }  

    return code
}
