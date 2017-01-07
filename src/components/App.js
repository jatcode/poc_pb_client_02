import React, { Component } from 'react';
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators'
import Main from './Main';


function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreator(actionCreators,dispatch);
}

const App= connect(mapStateToProps,mapDispatchToProps)(Main);
export default App;
