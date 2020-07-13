import React, { useState } from 'react';
import TopNav from './components/TopNav'
import Finance from './components/Finance'
import Inventory from './components/Inventory'
import InputForm from './components/Form'

function App() {

  const [inventory, setInventory] = useState(JSON.parse(localStorage.getItem("inventoryData")));
  const [type, setType] = useState("")
  const [title, setTitle] = useState("")
  const [dimensions, setDimensions] = useState("")
  const [status, setStatus] = useState("Available")
  const [price, setPrice] = useState("")
  const [buyer, setBuyer] = useState("")
  const [due, setDue] = useState(new Date())
  const [img, setImg] = useState("")

  function storeInventory(props) {
    setInventory(props)
    localStorage.setItem("inventoryData", JSON.stringify(props))
  }

  return (
    <>
      <TopNav />
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-8 col-12">
            <Inventory
              inventory={inventory}
              storeInventory={storeInventory}
            />
          </div>
          <div className="col-md-4 col-12 bg-light rounded">
            <InputForm
              inventory={inventory}
              storeInventory={storeInventory}
              type={type}
              setType={setType}
              title={title}
              setTitle={setTitle}
              dimensions={dimensions}
              setDimensions={setDimensions}
              status={status}
              setStatus={setStatus}
              price={price}
              setPrice={setPrice}
              buyer={buyer}
              setBuyer={setBuyer}
              due={due}
              setDue={setDue}
              img={img}
              setImg={setImg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
