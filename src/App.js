import React from 'react'
import SDK from '@babbage/sdk'

const App = () => {
  const handleClick = async () => {
    const action = await SDK.createAction({
      description: 'First transaction!',
      outputs: [{
        script: '016a',
        satoshis: 1
      }]
    })

    console.log(action.txid)
  }

  return (
    <center style={{ margin: '1em' }}>
      <h1>Hello, Simple App!</h1>
      <p>This is a simple webpack setup for a React app.</p>
      <p>Changes to the code are live-reloaded.</p>
      <button onClick={handleClick}>Create Transaction</button>
    </center>
  )
}

export default App
