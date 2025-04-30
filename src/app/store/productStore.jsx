import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      set({ products: data, loading: false });
    } catch (error) {
      console.error('Failed to fetch products:', error);
      set({ loading: false });
    }
  },
}));
