import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicesOverview from '../components/ServicesOverview';
import ExportProcessDetails from '../components/ExportProcessDetails';
import DomesticOperations from '../components/DomesticOperations';
import QualityLogistics from '../components/QualityLogistics';
import ExportDestinations from '../components/ExportDestinations';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return <>
  <ServicesOverview />
  <ExportProcessDetails />
  <DomesticOperations />
  <QualityLogistics />
  <ExportDestinations />
  </>
};

export default ServicesPage;

