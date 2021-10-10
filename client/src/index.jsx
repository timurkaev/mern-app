import React from 'react'
import {render} from 'react-dom';
import './style.less'
import App from './components/App.jsx'

render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById('root')
)