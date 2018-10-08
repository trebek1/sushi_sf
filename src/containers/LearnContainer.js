import { connect } from 'react-redux';
import { getRestaurants } from '../actions';
​
const mapDispatchToProps = (dispatch, ownProps) => ({
  restaurants: () => dispatch(getRestaurants())
})
​
export default connect(
  null,
  mapDispatchToProps
)(LearnContainer)
