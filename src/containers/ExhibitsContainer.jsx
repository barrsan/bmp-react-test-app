import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Exhibits from '../components/Exhibits/Exhibits';
import {
  exhibitsItemsPageSelector,
  exhibitsFilterDataSelector,
  exhibitsPagesNumberSelector,
  exhibitsCurrentPageSelector,
} from '../selectors/exhibits';
import exhibitsActions from '../actions/exhibits';


export const ExhibitsContainer = props => <Exhibits {...props} />;


const mapStateToProps = state => ({
  items: exhibitsItemsPageSelector(state),
  filterData: exhibitsFilterDataSelector(state),
  pagesNumber: exhibitsPagesNumberSelector(state),
  currentPage: exhibitsCurrentPageSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ...exhibitsActions,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ExhibitsContainer);
