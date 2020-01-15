import React from 'react';
import Container from './styles';

import LogoSearch from '../../assets/search.svg';
import LogoCompany from '../../assets/organization.svg';
import LogoStar from '../../assets/star.svg';
import LogoLocalization from '../../assets/location.svg';
import LogoRepositories from '../../assets/repositories.svg';
import LogoFollowers from '../../assets/followers.svg';

// eslint-disable-next-line import/prefer-default-export
export const Search = () => (<Container src={LogoSearch} />);
export const Localization = () => (<Container src={LogoLocalization} />);
export const Company = () => (<Container src={LogoCompany} />);
export const Star = () => (<Container src={LogoStar} />);
export const Repositories = () => (<Container src={LogoRepositories} />);
export const Followers = () => (<Container src={LogoFollowers} />);
