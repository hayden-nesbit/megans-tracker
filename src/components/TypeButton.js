import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TypeButton = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} size="sm" light toggle={toggle}>
            <DropdownToggle caret>
                Type
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => props.setFilter("Original")}>Original</DropdownItem>
                <DropdownItem onClick={() => props.setFilter("Commission")}>Commission</DropdownItem>
                <DropdownItem onClick={() => props.setFilter("All")}>All</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )

}

export default TypeButton;