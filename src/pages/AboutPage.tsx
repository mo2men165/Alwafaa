import React from 'react';
import CompanyStory from '../components/CompanyStory';
import CompanyValues from '../components/CompanyValues';
import Certifications from '../components/Certifications';

const AboutPage: React.FC = () => {

  return <>
      <CompanyStory />
      <Certifications />
      <CompanyValues />

      </>
};

export default AboutPage;

