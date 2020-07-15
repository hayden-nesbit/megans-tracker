import React from 'react'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Commission(props) {

    function deleteInventory(title) {
        let newArr = props.list.filter(item => item.title !== title)
        props.storeList(newArr)
        console.log(title)
    }

    let commission = props.list ? props.list.filter(item => item.type === "Commission") : null

    let showList = commission ? commission.map((item, index) => {
        let days = Math.floor((new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24))

        return (
            <tr key={index}>
                <th scope="row"><FontAwesomeIcon onClick={() => deleteInventory(item.title)} className="text-danger" icon={faTrashAlt} /></th>
                <td>{item.type}</td>
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
                    <th>Type</th>
                    <th>Title</th>
                    <th>Dimensions</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Buyer</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                {showList}
            </tbody>
        </Table>
    );
    }
export default Commission
