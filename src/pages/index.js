import React from "react"
import Layout from "../components/Layout";
import Button from "../components/Button";
import MovePicker from '../components/MovePicker'
//import data from "../data/squats.json"

function Index() {
  function handleClick(ref) {
    console.log(ref)
  }



  return (
    <Layout>
      <h1>Hello World</h1>
      <MovePicker />
      <Button clickAction={handleClick} clickName="#home">Go Home</Button>
    </Layout>
  )
}



export default Index 