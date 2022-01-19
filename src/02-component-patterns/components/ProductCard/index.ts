import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../../interfaces/products.interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Buttons: ProductButtons, Image:  ProductImage, Title: ProductTitle 
});

export default ProductCard;