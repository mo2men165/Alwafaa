import React from 'react';
import { useTranslation } from 'react-i18next';
import BananaProducts from '../components/BananaProducts';
import DetailedProductSections from '../components/DetailedProductSections';
import StorageHandling from '../components/StorageHandling';


const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return <>
  <BananaProducts />
  <DetailedProductSections />
  <StorageHandling />
  </>
};

export default ProductsPage;

