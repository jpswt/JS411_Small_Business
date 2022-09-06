import { connect } from 'react-redux';
import AddListing from '../components/AddListing';
import { addListing, fetchLocation } from '../redux/actions';

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addListing: (listing) => dispatch(addListing(listing)),
		// fetchLocation: (maplisting) => dispatch(fetchLocation(maplisting)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
