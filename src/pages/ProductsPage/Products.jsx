import React from 'react';
import { useTranslation } from 'react-i18next';
import './Products.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import productsbannerimg from '../../images/products/products_benner.png'

const Products = () => {
  const { t } = useTranslation('Products'); // Products namespace 사용
  

  return (
    <>
    <Header/>
    <div className='Header_Block'></div>
      <div className='Banner'>
        <img className='Banner_img' src={productsbannerimg}/>
      </div>
      <div className='Section'> </div>
    <Footer/>
    </>
    
  );
};

export default Products;
