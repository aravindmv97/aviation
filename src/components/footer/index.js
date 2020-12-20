import React from 'react';

import * as Styles from './styles';

import FB from '../../assets/icons/fb.png';
import IG from '../../assets/icons/ig.png';
import IN from '../../assets/icons/in.png';
import TW from '../../assets/icons/tw.png';

export default function Footer() {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.MetaContent>
          <Styles.Item>
            <Styles.Title>Corporate Links</Styles.Title>
            <Styles.Links>
              <span>{`-  `}News & Media</span>
              <span>Business</span>
              <span>Enquiry</span>
              <span>Contact Us</span>
            </Styles.Links>
          </Styles.Item>
          <Styles.Item>
            <Styles.Title>Student Links</Styles.Title>{' '}
            <Styles.Links>
              <span>{`-  `}Courses</span>
              <span>Facilities</span>
              <span>Jobs & Careers</span>
              <span>Student</span>
              <span>Testimonials</span>
              <span>Admissions</span>
              <span>Student Enquiry</span>
            </Styles.Links>
          </Styles.Item>
          <Styles.Item>
            <Styles.Title>Policies</Styles.Title>
            <Styles.Links>
              <span>{`-  `}Disclaimer & Privacy Policy</span>
              <span>Profanity</span>
              <span>Sitemap</span>
            </Styles.Links>
          </Styles.Item>
        </Styles.MetaContent>
        <Styles.Social>
          <Styles.Icon src={FB} />
          <Styles.Icon src={IG} />
          <Styles.Icon src={IN} />
          <Styles.Icon src={TW} />
        </Styles.Social>
      </Styles.Container>
    </Styles.Wrapper>
  );
}
