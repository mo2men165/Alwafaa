import React from 'react';
import EliteHero from '../components/EliteHero';
import CompanyIntro from '../components/CompanyIntro';
import StatsCounters from '../components/StatsCouters';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';

const HomePage: React.FC = () => {

  return (
    <div>
      <EliteHero />
      <CompanyIntro />
      <StatsCounters />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;

