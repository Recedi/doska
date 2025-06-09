import { Product } from '../types';

export const initialProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    price: 299,
    originalPrice: 399,
    category: 'Electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videoUrl: '',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable design'
    ],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals with our advanced smartwatch featuring heart rate monitoring, GPS, and sleep tracking.',
    price: 199,
    originalPrice: 249,
    category: 'Wearables',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videoUrl: '',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Sleep analysis',
      'Water resistant'
    ],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    title: 'Professional Camera Lens',
    description: 'Capture stunning photos with our professional-grade camera lens featuring ultra-sharp optics and weather-sealed construction.',
    price: 899,
    originalPrice: 1199,
    category: 'Photography',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videoUrl: '',
    features: [
      'Ultra-sharp optics',
      'Weather-sealed',
      'Fast autofocus',
      'Professional grade'
    ],
    inStock: true,
    featured: false
  }
];