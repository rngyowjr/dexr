import {
    RECEIVE_CREATE_ERRORS,
    RECEIVE_PHOTO
} from '../actions/photo_actions';

const createErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CREATE_ERRORS:
            return action.errors;
        case RECEIVE_PHOTO:
            return [];
        default:
            return oldState;
    }
};

export default createErrorsReducer;