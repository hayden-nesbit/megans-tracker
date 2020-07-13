import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DateSelect from './Date'

const InputForm = (props) => {

  function handleSubmit(e) {
    e.preventDefault()

    let newEntry = []
    
    let newObj = {
      "type": props.type,
      "title": props.title,
      "dimensions": props.dimensions,
      "status": props.status,
      "price": props.price,
      "buyer": props.buyer,
      "due": props.due,
      "img": props.img
    }

    newEntry.push(newObj)

    props.inventory ?
      props.storeInventory((props.inventory).concat(newEntry))
      :
      props.storeInventory(newEntry)

  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup tag="fieldset">
          <legend>New entry</legend>
          <FormGroup check>
            <Label check>
              <Input onChange={(e) => props.setType(e.target.value)} value={props.type} type="radio" name="radio1" />{' '}
              Inventory
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input onChange={(e) => props.setType(e.target.value)} value={props.type} type="radio" name="radio1" />{' '}
              Commission
          </Label>
          </FormGroup>
        </FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input onChange={(e) => props.setTitle(e.target.value)} value={props.title} type="title" name="title" id="exampleEmail" placeholder="Title" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Dimensions</Label>
        <Input onChange={(e) => props.setDimensions(e.target.value)} value={props.dimensions} type="dimensions" name="dimensions" id="examplePassword" placeholder="11x14" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Status</Label>
        <Input onChange={(e) => props.setStatus(e.target.value)} value={props.status} type="select" name="select" >
          <option>Available</option>
          <option>Sold</option>
          <option>Paid</option>
          <option>Shipped</option>
          <option>In progress</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Price</Label>
        <Input onChange={(e) => props.setPrice(e.target.value)} value={props.price} type="price" name="price" id="examplePassword" placeholder="0" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Buyer</Label>
        <Input onChange={(e) => props.setBuyer(e.target.value)} value={props.buyer} type="buyer" name="buyer" id="exampleEmail" placeholder="N/A" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Due date</Label><br />
        <DateSelect
          due={props.due}
          setDue={props.setDue}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Image</Label>
        <Input onChange={(e) => props.setImg(e.target.value)} value={props.img} type="file" name="file" id="exampleFile" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default InputForm;