import React, { Component } from 'react'

function Finance(props) {

    let totalArr = []
    let totalProjected = 0
    for(let i = 0; i < props.list.length; i++) {
       totalArr.push(props.list[i].price)
       totalProjected = totalArr.reduce((a, b) => a + b, 0)
    }
    console.log(totalArr)

        return (
            <div>
               {totalProjected}
            </div>
        )
}

export default Finance 