import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewExhibitForm from '../components/NewExhibitForm/NewExhibitForm';
import exhibitsActions from '../actions/exhibits';


export const NewExhibitFormContainer = props => <NewExhibitForm {...props} />;


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  ...exhibitsActions,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewExhibitFormContainer);
