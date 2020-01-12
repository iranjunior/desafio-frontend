import React, { useState } from 'react';
import { connect } from 'react-redux';

import { CHANGE_USERNAME } from '../../constants/actions';
import { Search } from '../Icons/index';
import {
  Container, Input, Submit,
} from './styles';

const SearchComponent = ({
  history, username, match, dispatch,
}) => {
  const handleClick = async (e) => {
    e.preventDefault();
    if (username.length) {
      history.push(`/results/${username}`);
    } else {}
  };
  const handleSearch = (e) => {
    dispatch({
      type: CHANGE_USERNAME,
      payload: e.target.value,
    });
  };
  return (
    <Container>
      <Input type="text" defaultValue={username} required onChange={handleSearch} />
      <Submit type="submit" onClick={handleClick}>
        <Search />
      </Submit>
    </Container>
  );
};


const mapStateToProps = (state) => ({
  ...state,
  username: state.search.username,
});
export default connect(mapStateToProps)(SearchComponent);
