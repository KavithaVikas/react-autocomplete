import React from 'react';
import {render} from 'react-dom'
import AutoComplete from './AutoComplete.jsx'

class App extends React.Component {
  render () {
    return (
    <div>
    <p> Welcome To React Kavitha!!</p>
    <AutoComplete/>
    </div>
    )

  }
}

render(<App/>, document.getElementById('app'));