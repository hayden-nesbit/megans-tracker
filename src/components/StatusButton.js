import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const StatusButton = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    function updateStatus(status) {
        console.log("here")
        let update = [...props.list]
        console.log(update)
        for (let item of update) {
            if (item.title === props.title) {
                item.status = status
            }
        }
        props.storeList(update)
    }

    return (
        <Dropdown isOpen={dropdownOpen} size="sm" light toggle={toggle}>
            <DropdownToggle caret>
                {props.thisStatus}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => updateStatus("Available")}>Available</DropdownItem>
                <DropdownItem onClick={() => updateStatus("Sold")}>Sold</DropdownItem>
                <DropdownItem onClick={() => updateStatus("Paid")}>Paid</DropdownItem>
                <DropdownItem onClick={() => updateStatus("In progress")}>In progress</DropdownItem>
                <DropdownItem onClick={() => updateStatus("Shipped")}>Shipped</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )

}

export default StatusButton;