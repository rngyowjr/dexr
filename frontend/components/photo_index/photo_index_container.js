import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestPhotos, deletePhoto } from '../../actions/photo_actions';

const mSTP = state => ({
    errors: state.errors.deleteErrors,
    photos: Object.values(state.entities.photos),
    currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    requestPhotos: () => dispatch(requestPhotos()),
    deletePhoto: (eventId) => dispatch(deletePhoto(eventId))
});

export default connect(mSTP, mDTP)(PhotoIndex);