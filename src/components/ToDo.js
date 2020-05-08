import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text, id, deleteToDo }) {
  return (
    <li>
      {text}
      <button onClick={deleteToDo}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('ownProps', ownProps)
  return {
    deleteToDo: id => dispatch(actionCreators.deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps) (ToDo);
