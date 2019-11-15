import {
    RECEIVE_DELETE_ERRORS,
    REMOVE_PHOTO
} from '../actions/photo_actions';

const createErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_DELETE_ERRORS:
            return action.errors;
        case REMOVE_PHOTO:
            return [];
        default:
            return oldState;
    }
};

export default createErrorsReducer;