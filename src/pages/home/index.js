import React from 'react';

import SideNav from '../../components/sideNav';
import Card from '../../components/card';
import LeadForm from '../../components/leadForm';

import * as Styles from './styles';

const list = [
  {
    image:
      'https://www.bradfordaviation.com/images/courses-01-international-diploma-in-airport-operations.jpg',
    title: 'International Diploma in Airport Operations',
    info: 'Duration: 12 Months'
  },
  {
    image:
      'https://www.bradfordaviation.com/images/courses-03-international-air-hostess-training.jpg',
    title: 'International Air Hostess Training',
    info: 'Duration: 12 Months'
  },
  {
    image:
      'https://www.bradfordaviation.com/images/courses-02-international-diploma-in-airline-operations.jpg',
    title: 'International Diploma in Airline Operations',
    info: 'Duration: 12 Months'
  },
  {
    image:
      'https://www.bradfordaviation.com/images/courses-04-advanced-airport-operations-management-refresher.jpg',
    title: 'Advanced Airport Operations Management-Refresher',
    info: 'Duration: 6 Months'
  },
  {
    image:
      'https://www.bradfordaviation.com/images/courses-05-regulatory-training.jpg',
    title: 'Regulatory Training (DGCA Approved)',
    info: ''
  },
  {
    image:
      'https://www.bradfordaviation.com/images/courses-06-bba-aviation.jpg',
    title: 'BBA with Aviation',
    info: 'Duration: 3 Years'
  }
];

export default function Home(props) {
  const { showMenu } = props;
  return (
    <Styles.Wrapper id="content">
      <Styles.NavWrapper showMenu={showMenu}>
        <SideNav />
      </Styles.NavWrapper>
      <Styles.Content>
        {list.map(item => (
          <Card image={item.image} title={item.title} info={item.info} />
        ))}
      </Styles.Content>
      <Styles.LeadFormWrapper>
        <LeadForm />
      </Styles.LeadFormWrapper>
    </Styles.Wrapper>
  );
}
