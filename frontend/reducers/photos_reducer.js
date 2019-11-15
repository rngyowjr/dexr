import { 
    RECEIVE_PHOTOS,
    RECEIVE_PHOTO,
    REMOVE_PHOTO
} from '../actions/photo_actions';

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            return Object.assign({}, oldState, { [action.photo.id]: action.photo });
        case REMOVE_PHOTO:
            let newState = Object.assign({}, oldState);
            delete newState[action.photoId];
            return newState;
        default:
            return oldState;
    }
};

export default photosReducer;
