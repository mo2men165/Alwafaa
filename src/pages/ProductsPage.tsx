import React from 'react';
import { useTranslation } from 'react-i18next';
import BananaProducts from '../components/BananaProducts';
import StorageHandling from '../components/StorageHandling';


const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return <>
  <BananaProducts />
  <StorageHandling />
  </>
};

export default ProductsPage;

