import styles from '../../styles/styles.module.css'
import { useProduct } from '../../hooks/useProduct'
import { createContext, CSSProperties, ReactElement } from 'react'
import { Product, ProductContextProps } from '../../interfaces/products.interfaces';
import { ProductImage, ProductTitle, ProductButtons } from './index';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    product: Product,
    children? : ReactElement | ReactElement[],
    className? : string,
    style?: CSSProperties,
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();
    return (
        <Provider value={{ counter, increaseBy, product }}>
             <div className={`${styles.productCard} ${className}`} style={style}>
            {children}
            {/* <ProductImage img={product.img}/>
            <ProductTitle title={product.title}/>
            <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
        </div>
        </Provider>
       
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;