import { connect } from 'react-redux';
import { getRestaurants } from '../actions';
import Learn from '../components/Learn';

const mapStateToProps = state => ({
  restaurants: state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  restaurantsFn: () => dispatch(getRestaurants()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Learn);
