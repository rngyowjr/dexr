import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_CREATE_ERRORS = 'RECEIVE_CREATE_ERRORS';
export const RECEIVE_DELETE_ERRORS = 'RECEIVE_DELETE_ERRORS';

const receivePhotos = photos => ({
    type: RECEIVE_PHOTOS,
    photos
});

const receivePhoto = photo => ({
    type: RECEIVE_PHOTO,
    photo
});

const removePhoto = photoId => ({
    type: REMOVE_PHOTO,
    photoId
});

const receiveCreateErrors = errors => ({
    type: RECEIVE_CREATE_ERRORS,
    errors
});

const receiveDeleteErrors = errors => ({
    type: RECEIVE_DELETE_ERRORS,
    errors
});

export const requestPhotos = () => dispatch => (
    PhotoAPIUtil.fetchPhotos()
        .then(photos => dispatch(receivePhotos(photos)))
);

export const createPhoto = (photo) => dispatch => (
    PhotoAPIUtil.createPhoto(photo)
        .then(photo => dispatch(receivePhoto(photo)),
        err => (
            dispatch(receiveCreateErrors(err.responseJSON))
        ))
);

export const deletePhoto = (photoId) => dispatch => (
    PhotoAPIUtil.deletePhoto(photoId)
        .then(() => dispatch(removePhoto(photoId)),
        err => (
            dispatch(receiveDeleteErrors(err.responseJSON))
        ))
);


