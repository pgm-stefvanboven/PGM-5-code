export type Product = {
    id: number;
    item: string;
    voorraad: string;
    description?: string;
    image?: string;
};

export type ProductList = Product[];