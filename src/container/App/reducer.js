import {actionNames} from '../../actions';

export default (state = {
    showSettings: false,
    openPaths: [

    ]
}, action) => {
    switch (action.type) {
        case actionNames.TOGGLE_SHOW_SETTING:
         return {
             ...state,
             showSettings: !state.showSettings
         }
        default:
            return state;
    }
}