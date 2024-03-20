export interface CustomerData {
    shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
}

// -------------------------------------------------
// ---------------------- order det ----------------
export interface Order {
    shippingAddress: ShippingAddress;
    taxPrice: number;
    shippingPrice: number;
    totalOrderPrice: number;
    paymentMethodType: string;
    isPaid: boolean;
    isDelivered: boolean;
    _id: string;
    user: User;
    cartItems: CartItem[];
    paidAt: Date;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    __v: number;
}

export interface CartItem {
    count: number;
    _id: string;
    product: Product;
    price: number;
}

export interface Product {
    subcategory: Brand[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    imageCover: string;
    category: Brand;
    brand: Brand;
    ratingsAverage: number;
    id: string;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image?: string;
    category?: string;
}


export interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
}
