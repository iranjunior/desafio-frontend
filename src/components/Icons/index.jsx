import React from 'react';

import LogoSearch from '../../assets/search.svg';
import LogoCompany from '../../assets/organization.svg';
import LogoStar from '../../assets/star.svg';
import LogoLocalization from '../../assets/location.svg';
import LogoRepositories from '../../assets/repositories.svg';
import LogoFollowers from '../../assets/followers.svg';

// eslint-disable-next-line import/prefer-default-export
export const Search = () => (<img src={LogoSearch} />);
export const Localization = () => (<img src={LogoLocalization} />);
export const Company = () => (<img src={LogoCompany} />);
export const Star = () => (<img src={LogoStar} />);
export const Repositories = () => (<img src={LogoRepositories} />);
export const Followers = () => (<img src={LogoFollowers} />);
