import { connect } from 'react-redux';
import { getRestaurants } from '../actions';
import Learn from '../components/Learn';
import type { Dispatch } from 'redux';
import type { Restaurant } from '../types/restaurants';

type Action = { type: string };

const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): { restaurants: Array<Restaurant> } => ({
  // $FlowFixMe
  restaurants: () => dispatch(getRestaurants()),
});

export default connect(
  null,
  mapDispatchToProps
)(Learn);
