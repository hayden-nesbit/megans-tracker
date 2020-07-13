import React from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Inventory = (props) => {

    function deleteInventory(title) {
        let newArr = props.inventory.filter(item => item.title !== title)
        props.storeInventory(newArr)
        console.log(title)
    }

    let showInventory = props.inventory ? props.inventory.map((item, index) => {
        let days = Math.floor((new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24))

        return (
            <tr key={index}>
                <th scope="row"><FontAwesomeIcon onClick={() => deleteInventory(item.title)} className="text-danger" icon={faTrashAlt} /></th>
                <td>{item.title}</td>
                <td>{item.dimensions}</td>
                <td>{item.status}</td>
                <td>{item.price}</td>
                <td>{item.buyer}</td>
                <td className={days < 7 ? "text-danger" : null}>{days} days</td>
            </tr>
        )
    })
        :
        null

    return (
        <Table hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Dimensions</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Buyer</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                {showInventory}
            </tbody>
        </Table>
    );
}

export default Inventory;