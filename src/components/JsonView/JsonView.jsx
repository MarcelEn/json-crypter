import React from 'react';
import style from './style.css';
import { Grid, Col, FormControl, Collapse, Button, Well, Label } from 'react-bootstrap';

function isThisPathOpen(currentPath, allPaths) {
  console.log(allPaths)
  return allPaths.find(path => path === currentPath);
}

const JsonView = props => (
  <Grid>
    {
      Object.keys(props.JsonData).map((key, index) => (
        <Well key={'mainHeading-' + index}>
          <h3>
            {key + ' '}
            {}
            {
              isThisPathOpen('/' + key, props.openPaths) ?
                <Label onClick={() => { props.toggleOpenMenuPoint('/' + key) }} className={style.clickable} bsStyle="danger">
                  -
                </Label>
                :
                <Label onClick={() => { props.toggleOpenMenuPoint('/' + key) }} className={style.clickable} bsStyle="primary">
                  +
                </Label>
            }


          </h3>
          <Collapse in>
            <div>
              <ul>
                {
                  props.JsonData[key].map((entry, sindex) => {
                    switch (entry.type) {
                      case 'list':
                        return (
                          <li key={'subHeading-' + index + '-' + sindex}>
                            <h4>
                              {entry.heading + ' '}
                              {
                                isThisPathOpen('/' + key + '/' + sindex, props.openPaths) ?
                                  <Label onClick={() => { props.toggleOpenMenuPoint('/' + key + '/' + sindex) }} className={style.clickable} bsStyle="danger">
                                    -
                                  </Label>
                                  :
                                  <Label onClick={() => { props.toggleOpenMenuPoint('/' + key + '/' + sindex) }} className={style.clickable} bsStyle="primary">
                                    +
                                  </Label>
                              }
                            </h4>
                            <Collapse in>
                              <div>
                                <ul>
                                  {
                                    entry.data.map((subentry, seindex) => (
                                      <li key={'subEntry-' + index + '-' + sindex + '-' + seindex}>
                                        {subentry}
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            </Collapse>
                          </li>
                        );
                      default:
                        return (
                          <li>
                            <h4>{entry.heading}</h4>
                          </li>
                        );
                    }
                  })
                }
              </ul>
            </div>
          </Collapse>
        </Well>
      ))
    }
  </Grid>
)

export default JsonView;