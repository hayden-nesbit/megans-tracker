import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DateSelect from './Date'

const SupplyForm = (props) => {

    function handleSubmit(e) {
        e.preventDefault()

        let newSupply = []

        let newObj = {
            "id": new Date().getTime(),
            "supply": props.supply,
            "store": props.store,
            "supplyPrice": props.supplyPrice,
            "purchaseDate": props.purchaseDate.toString(),
            "receipt": props.receipt
        }

        console.log(newObj)

        newSupply.push(newObj)

        props.supplies ?
            props.storeSupplies((props.supplies).concat(newSupply))
            :
            props.storeSupplies(newSupply)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormGroup tag="fieldset">
                    <legend>New supplies</legend>
                </FormGroup>
                <Label for="exampleEmail">Supply</Label>
                <Input onChange={(e) => props.setSupply(e.target.value)} value={props.supply} type="title" name="title" id="exampleEmail" placeholder="Supply" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Store</Label>
                <Input onChange={(e) => props.setStore(e.target.value)} value={props.store} type="dimensions" name="dimensions" id="examplePassword" placeholder="Store name" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Price</Label>
                <Input onChange={(e) => props.setSupplyPrice(parseInt(e.target.value))} value={props.supplyPrice} type="price" name="price" id="examplePassword" placeholder="0" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Date</Label><br />
                <DateSelect
                    due={props.purchaseDate}
                    setDue={props.setPurchaseDate}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">Receipt</Label>
                <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default SupplyForm;