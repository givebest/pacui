import React, { Component } from 'react';
import { PButton, PBreadcrumb, PCheckbox, PDivider } from './components/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <PButton type="primary">PButton</PButton>

        <PDivider></PDivider>

        <PBreadcrumb>
          <PBreadcrumb.Item>Home</PBreadcrumb.Item>
          <PBreadcrumb.Item><a href="">Application Center</a></PBreadcrumb.Item>
          <PBreadcrumb.Item><a href="">Application List</a></PBreadcrumb.Item>
          <PBreadcrumb.Item>An Application</PBreadcrumb.Item>
        </PBreadcrumb>

        <PDivider></PDivider>

        <PCheckbox>Checkbox</PCheckbox>


      </div>
    );
  }
}

export default App;
