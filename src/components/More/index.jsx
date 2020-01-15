import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_UI_SHOWALL } from '../../constants/actions';
import Container from './styles';

const More = ({ showAll, dispatch }) => {
  const handleMore = () => ({
    type: CHANGE_UI_SHOWALL,
    payload: !showAll,
  });
  return (
    <Container onClick={() => dispatch(handleMore())}>
      {showAll ? 'Hide' : 'More'}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  showAll: state.ui.showAll,
});
export default connect(mapStateToProps)(More);
