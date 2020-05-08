import React from 'react'
import { connect } from 'react-redux';

function Detail({ toDo }) {
  return (
    <>
      <h1>Text: {toDo?.text}</h1>
      <h3>ID: {toDo?.id}</h3>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  const { match: { params: { id }}} = ownProps;
  return {
    toDo: state.find(toDo => toDo.id === Number(id))
  }
}

export default connect(mapStateToProps) (Detail);
