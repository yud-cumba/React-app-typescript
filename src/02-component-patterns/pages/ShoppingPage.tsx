import {
  ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from '../components/ProductCard/index';
const product = {
  id: '1',
  title: 'Coffe Mug :D',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      ></div>
        <ProductCard product={product}>
          <ProductImage/>
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      
    </div>
  );
};
