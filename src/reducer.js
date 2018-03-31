import {
    combineReducers
} from 'redux';
import app from './container/App/reducer';
import { actionNames } from './actions';


const data = (state = {
    JsonData: {
        test: [
            {
                type: 'list',
                heading: 'test',
                data: [
                    'hallo',
                    'bb'
                ]
            },
            {
                type: 'list',
                heading: 'test2',
                data: [
                    'hallo',
                    'bb'
                ]
            }
        ]
    }
}, action) => {
    switch (action.type) {

        default: return state;
    }
}



export default combineReducers({
    data,
    ui: app
})