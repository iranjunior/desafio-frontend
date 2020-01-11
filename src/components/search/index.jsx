import React, { useState } from 'react';
import { connect } from 'react-redux';

import { CHANGE_USER } from '../../constants/actions';
import { Search } from '../Icons/index';
import {
  Container, Input, Submit,
} from './styles';

const SearchComponent = ({ history, username, dispatch }) => {
  const [validateInput, setValidateInput] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    if (username.length) {
      setValidateInput(true);
      history.push(`/results/${username}`);
    } else {
      setValidateInput(false);
    }
  };
  const handleSearch = (e) => {
    setValidateInput(true);
    dispatch({
      type: CHANGE_USER,
      payload: e.target.value,
    });
  };
  return (
    <Container>
      <Input type="text" defaultValue={username} required validate={validateInput} onChange={handleSearch} />
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
