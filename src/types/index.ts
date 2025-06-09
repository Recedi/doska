export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  videoUrl?: string;
  features: string[];
  inStock: boolean;
  featured: boolean;
}

export interface ProductFormData {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  category: string;
  images: string[];
  videoUrl: string;
  features: string[];
  inStock: boolean;
  featured: boolean;
}