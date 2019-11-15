import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import createErrorsReducer from './create_errors_reducer';
import deleteErrorsReducer from './delete_errors_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    createErrors: createErrorsReducer,
    deleteErrors: deleteErrorsReducer
});

export default errorsReducer;