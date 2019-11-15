import { connect } from 'react-redux';
import CreateForm from './create_form';
import { createPhoto } from '../../actions/photo_actions';

const mSTP = state => ({
    errors: state.errors.createErrors,
    authorId: state.session.currentUser
});

const mDTP = dispatch => ({
    createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(mSTP, mDTP)(CreateForm);