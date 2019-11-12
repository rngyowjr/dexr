import { connect } from 'react-redux';
import MainPage from './main_page';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
});
const mDTP = dispatch => ({});

export default connect(mSTP, mDTP)(MainPage);