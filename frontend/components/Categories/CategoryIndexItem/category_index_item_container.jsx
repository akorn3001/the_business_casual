import { connect } from 'react-redux';
import CategoryIndexItem from './category_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    // attendMeetup: (meetupId) => dispatch(attendMeetup(meetupId)),
    // unattendMeetup: (meetupId) => dispatch(unattendMeetup(meetupId)),
    // requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))

  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryIndexItem));
