import React, { Component } from 'react'
import { Table } from 'reactstrap';
import SupplyForm from "./SupplyForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Finance(props) {

    function deleteInventory(id) {
        let newArr = props.supplies.filter(item => item.id !== id)
        props.storeSupplies(newArr)
    }

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

    let showSupply = props.supplies ? props.supplies.map((item, index) => {

        let date = item.purchaseDate.split(" ")
        let dateArr = []
        dateArr.push(date[1], date[2], date[3])
        dateArr = dateArr.join(" ")

        return (
            <tr key={index}>
                <th scope="row"><FontAwesomeIcon onClick={() => deleteInventory(item.id)} className="text-danger" icon={faTrashAlt} /></th>
                <td>{item.supply}</td>
                <td>{item.store}</td>
                <td>${item.supplyPrice}</td>
                <td>{dateArr}</td>
            </tr>
        )
    })
        :
        null

    return (
        <div className="container mt-5">

            <div className="row mb-5">
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <legend>Inventory total:</legend>
                            <h1 className="text-success">${totalProjected}</h1>
                            <legend className="mt-4">Paid total:</legend>
                            <h1 className="text-success">${totalPaid}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Supply</th>
                                        <th>Store</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {showSupply}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className="col-4 bg-light rounded">
                    <SupplyForm
                        supplies={props.supplies}
                        storeSupplies={props.storeSupplies}
                        supply={props.supply}
                        setSupply={props.setSupply}
                        store={props.store}
                        setStore={props.setStore}
                        purchaseDate={props.purchaseDate}
                        setPurchaseDate={props.setPurchaseDate}
                        supplyPrice={props.supplyPrice}
                        setSupplyPrice={props.setSupplyPrice}
                        receipt={props.receipt}
                        setReceipt={props.setReceipt}
                    />
                </div>
            </div>
        </div>
    )
}

export default Finance 