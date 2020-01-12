/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import {
  Company, Star, Followers, Repositories, Localization,
} from '../Icons/index';
import {
  Container, Image, Name, Information, Space, Field,
} from './styles';

const User = ({ user }) => (
  <Container>
    <Image src={user.avatar_url} />
    <Name>{user.name || ''}</Name>
    <Information login>{ user.login || '' }</Information>
    <Space />
    <Field>
      <Company />
      <Information>{user.company || ''}</Information>
    </Field>
    <Field>
      <Localization />
      <Information>
        {user.location || ''}
      </Information>
    </Field>
    <Field>
      <Star />
      <Information>
        {user.starCounts || 0}
      </Information>
    </Field>
    <Field>
      <Repositories />
      <Information>
        {user.public_repos || ''}
      </Information>
    </Field>
    <Field>
      <Followers />
      <Information>
        {user.followers || ''}
      </Information>
    </Field>
  </Container>
);
const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
});

export default connect(mapStateToProps)(User);
