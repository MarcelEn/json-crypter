import React from 'react';
import style from './style.css';
import { Row, Col, FormControl, Collapse, Button } from 'react-bootstrap';


const DataConnector = props => (
  <div className={style.menu}>
    <Button onClick={props.toggleShowSettings}>
      Settings
    </Button>
    <div className={style.content}>
      <Collapse in={props.showSettings}>
        <div>
          File: <code>{props.fileName}asdf</code>
          <FormControl
            type="password"
            placeholder="Password"
          />
        </div>
      </Collapse>
    </div>
  </div>
)

export default DataConnector;