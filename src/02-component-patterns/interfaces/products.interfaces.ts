import { ReactElement } from "react";

export interface ProductProps {
    product: Product,
    children? : ReactElement | ReactElement[]
}
export interface Product {
    id: string;
    title: string;
    img? : string;
}
// interface ProductButtonsProps {
//     counter: number,
//     increaseBy:  (value: number) => void

// }
export interface ProductContextProps {
    counter: number;
    increaseBy:  (value: number) => void;
    product: Product,
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductProps): JSX.Element
    Title: () => JSX.Element,
    Buttons: () => JSX.Element,
    Image: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element
}