import React from "react"
import Layout from "../components/Layout";
import Button from "../components/Button";

function Index() {
  function handleClick(ref) {
    console.log(ref)
  }

  return (
    <Layout>
      <h1>Hello World</h1>
      <Button clickAction={handleClick} clickName="#home">Go Home</Button>
    </Layout>
  )
}

export default Index 