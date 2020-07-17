import React from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import StatusButton from './StatusButton'

const QuickView = (props) => {

    function deleteInventory(title) {
        let newArr = props.list.filter(item => item.title !== title)
        props.storeList(newArr)
        console.log(title)
    }

    let upcoming = props.list ? props.list.filter(item => (new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24) < 7 && (new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24) > 1) : null

    let showList = upcoming ? upcoming.map((item, index) => {
        let days = Math.floor((new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24))

        return (
            <tr key={index}>
                <th scope="row"><FontAwesomeIcon onClick={() => deleteInventory(item.title)} className="text-danger" icon={faTrashAlt} /></th>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.dimensions}</td>
                <td><StatusButton 
                    thisStatus={item.status}
                    setStatus={props.setStatus}
                    title={item.title}
                    list={props.list}
                    storeList={props.storeList}
                /></td>
                <td>{item.buyer}</td>
                <td className="text-danger">{days} days</td>
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
                    {/* <th>Price</th> */}
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

export default QuickView;