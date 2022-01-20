
import { Props as ProductButtonsProps } from "../components/ProductCard/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductImageProps } from "../components/ProductCard/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductCard/ProductTitle";


export interface Product {
    id: string;
    title: string;
    img? : string;
}
// interface ProductButtonsProps {
//     counter: number,
//     increaseBy:  (value: number) => void

// }

export interface ProductCardHOCProps {
    ({ children, product, className, style }: ProductCardProps): JSX.Element
    Title: ({ title, className, style } : ProductTitleProps) => JSX.Element,
    Buttons: ({ className, style } : ProductButtonsProps) => JSX.Element,
    Image: ({ img, className, style }: ProductImageProps) => JSX.Element
}
export interface ProductContextProps {
    counter: number;
    increaseBy:  (value: number) => void;
    product: Product,
}