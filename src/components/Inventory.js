import React, { useState } from 'react'
import { Table, CustomInput, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import TypeButton from './TypeButton'
import StatusButton from './StatusButton'

function Inventory(props) {

    const [filter, setFilter] = useState("All")

    function deleteInventory(title) {
        let newArr = props.list.filter(item => item.title !== title)
        props.storeList(newArr)
        console.log(title)
    }    

    let filterView = filter !== "All" && props.list ? props.list.filter(item => item.type === filter) : props.list

    let showList = filterView.map((item, index) => {
        let days = Math.floor((new Date(item.due).getTime() - new Date().getTime()) / (1000 * 3600 * 24))
        let display = days > 1 ? days + " days" : ""

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
                <td>{item.price}</td>
                <td>{item.buyer}</td>
                <td className={days < 7 ? "text-danger" : null}>{display}</td>
            </tr>

        )
    })


    return (
       
        <Table hover>
            <thead>
                <tr>
                    <th></th>
                    <th><TypeButton 
                        setFilter={setFilter}
                    /></th>
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
export default Inventory
