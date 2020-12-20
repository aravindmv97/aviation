import React, { useState, useLayoutEffect } from 'react';

import SideNav from '../sideNav';
import Input from '../input';

import * as Styles from './styles';

import Menu from '../../assets/icons/menu.png';
import LogoIcon from '../../assets/icons/logo.png';
import Search from '../../assets/icons/search.png';
import Call from '../../assets/icons/call.png';

export default function Header(props) {
  const { showMenu } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = e => {};

  return (
    <Styles.Wrapper>
      <Styles.Container>
        {!!showMenu && (
          <Styles.MenuIcon
            src={Menu}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        <Styles.Logo src={LogoIcon} />
        <Styles.Search>
          <Styles.SearchIcon src={Search} onClick={() => setShowSearch(true)} />
          {!!showSearch && (
            <Styles.StyledInput
              placeholder={'Search...'}
              bordered
              value={''}
              onChange={handleChange}
              width={'300px'}
              height={'40px'}
              margin={'20px auto'}
            />
          )}
        </Styles.Search>
        <Styles.Contact>
          <Styles.CallIcon src={Call} />
          9003599953
        </Styles.Contact>
        {!!toggleMenu && (
          <Styles.SideNavWrapper>
            <SideNav />
          </Styles.SideNavWrapper>
        )}
      </Styles.Container>
    </Styles.Wrapper>
  );
}
