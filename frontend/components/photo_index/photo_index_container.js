import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';

const mSTP = state => ({
    errors: state.errors.deleteErrors,
    photos: Object.values(state.entities.photos),
    currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    deletePhoto: (eventId) => dispatch(deletePhoto(eventId))
});

export default connect(mSTP, mDTP)(PhotoIndex);