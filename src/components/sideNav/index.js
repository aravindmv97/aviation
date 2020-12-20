import React, { useState } from 'react';

import * as Styles from './styles';

import Menu from '../../assets/icons/menu.png';

const list = [
  { icon: Menu, title: 'Home' },
  { icon: Menu, title: 'Courses', subCat: ['sub 1', 'sub 2'] },
  { icon: Menu, title: 'Jobs & Careers Careers', subCat: ['sub 1'] },
  { icon: Menu, title: 'Facilities' }
];

export default function SideNav() {
  return (
    <Styles.Wrapper>
      {list.map(item => (
        <Styles.Item key={item.title} showSubCat={item?.subCat?.length}>
          <Styles.ItemWrapper>
            <Styles.Icon src={item.icon} />
            <Styles.Title showArrow={item?.subCat?.length}>
              {item.title}
            </Styles.Title>
          </Styles.ItemWrapper>
          {!!item?.subCat?.length && (
            <Styles.SubCatWrapper id="subCat">
              {item.subCat.map(sub => (
                <span>{sub}</span>
              ))}
            </Styles.SubCatWrapper>
          )}
        </Styles.Item>
      ))}
    </Styles.Wrapper>
  );
}
