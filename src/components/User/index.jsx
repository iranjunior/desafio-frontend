/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import {
  Company, Star, Followers, Repositories, Localization,
} from '../Icons/index';
import {
  Container, Header, Image, Name, Content, Information, Space, Field,
} from './styles';

const User = ({ user }) => (
  <Container>
    <Header>

      <Image src={user.avatar_url} />
      <Name>{user.name || ''}</Name>
      <Information login>{ user.login || '' }</Information>
    </Header>
    <Space />
    <Content>

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
          {user.startCounts || 0}
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
    </Content>
  </Container>
);
const mapStateToProps = (state) => ({
  ...state,
  user: state.user.user,
});

export default connect(mapStateToProps)(User);
