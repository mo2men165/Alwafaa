import React from 'react';
import { useTranslation } from 'react-i18next';
import ExportDestinations from '../components/ExportDestinations';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return <>
  <ExportDestinations />
  
  </>
};

export default ServicesPage;

