import { connect } from 'react-redux';
import Learn from '../components/Learn';

const mapStateToProps = state => ({
  restaurants: state,
});

export default connect(mapStateToProps)(Learn);
