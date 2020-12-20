import React from 'react';

import * as Styles from './styles';

export default function Card(props) {
  const { image, title, info } = props;
  return (
    <Styles.Wrapper>
      <Styles.Cover src={image} />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Info>{info}</Styles.Info>
      <Styles.CTA>Read More</Styles.CTA>
    </Styles.Wrapper>
  );
}
