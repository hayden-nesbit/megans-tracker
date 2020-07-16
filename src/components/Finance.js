import React, { Component } from 'react'

function Finance(props) {

    let totalArr = []
    let totalProjected = 0
    let paidArr = []
    let totalPaid = 0
    for (let i = 0; i < props.list.length; i++) {

        if (props.list[i].status === "Paid") {
            paidArr.push(props.list[i].price)
            totalPaid = paidArr.reduce((a, b) => a + b, 0)
        } else {
            totalArr.push(props.list[i].price)
            totalProjected = totalArr.reduce((a, b) => a + b, 0)
        }
    }
        console.log(totalArr)

        return (
            <div className="container">
                <legend>Inventory total:</legend>
                <h1 className="text-success">${totalProjected}</h1>
                <legend className="mt-4">Paid total:</legend>
                <h1 className="text-success">${totalPaid}</h1>
            </div>
        )
    }

    export default Finance 