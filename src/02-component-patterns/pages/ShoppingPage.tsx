import {
  ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from '../components/ProductCard/index';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug :D',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      ></div>
        <ProductCard product={product} className='bg-dark'>
          <ProductImage className='custom-image'/>
          <ProductTitle className='text-white'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard>
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title className='text-white'/>
          <ProductCard.Buttons className='custom-buttons'/>
        </ProductCard>
      <ProductCard product={product} style={{ backgroundColor: 'grey'}}>
          <ProductCard.Image style={{border: '1px solid black'}}/>
          <ProductCard.Title style={{fontWeight: 'bold'}}/>
          <ProductCard.Buttons style={{display: 'flex', justifyContent: 'end'}}/>
        </ProductCard>
    </div>
  );
};
