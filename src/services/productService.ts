
export type Product = {
  id: string;
  name: string;
  category: 'jewelry' | 'idol';
  subcategory: string;
  price: number;
  salePrice?: number;
  description: string;
  details: string;
  images: string[];
  weight: string;
  material: string;
  dimensions?: string;
  inStock: boolean;
  featured: boolean;
  createdAt: Date;
};

// Local storage key for products
const PRODUCTS_STORAGE_KEY = 'lingam-products';

// Initialize with some starting products if needed, otherwise empty array
let mockProducts: Product[] = [];

// Initialize from local storage if available
const initializeProducts = () => {
  const storedData = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData);
      // Convert string dates back to Date objects
      mockProducts = parsedData.map((p: any) => ({
        ...p,
        createdAt: new Date(p.createdAt)
      }));
    } catch (error) {
      console.error('Error parsing products from local storage:', error);
      // If parsing fails, initialize with default products
      setDefaultProducts();
    }
  } else {
    // No stored data, initialize with defaults
    setDefaultProducts();
  }
};

// Save to local storage
const saveProducts = () => {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(mockProducts));
};

// Default products (only used if no local storage data is found)
const setDefaultProducts = () => {
  mockProducts = [
    {
      id: '1',
      name: 'Silver Lakshmi Pendant',
      category: 'jewelry',
      subcategory: 'pendants',
      price: 60,
      description: 'Handcrafted Silver Goddess Lakshmi Pendant with intricate detailing.',
      details: 'This exquisitely crafted Silver Lakshmi Pendant represents the Hindu goddess of wealth and prosperity. Each detail is meticulously hand-carved by our skilled artisans, making this piece a perfect adornment for both daily wear and special occasions. The pendant comes with a complimentary silver chain.',
      images: [
        'https://media-hosting.imagekit.io/73e18222adbd4aac/laxmi.png?Expires=1840301297&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1gyzxuQkV3dZMccwQ1YAT986AbkGZNqEoVnzwxYTQRf-uuduS6Cpq4ix2xNnP4iHvK8WKdsyCi6mglql6PEqT8zSgHRKYQdBXn4~EHRfco37WByugczWQiaS5NzRjOMH6rZGzg1aAHiy6nCEx5Na0agsdA~WajT9KS0NdxrC5ZwLFlaZaZV-tyEhQXa88PMEqR48NkVG2bQ6fQodoYSBqeybX8Nz2rtSH2sYEl1HRgfS85zhw2zDxFMEDuKA~-349n8Kp3nmAtWFihwWVSxqHDhinJo37YIJ0-pebVtmLSqzLuD3iNLddlalnwMpi10ucRhHhxs3OYS9LyFDsciA2w__'
      ],
      weight: '12 grams',
      material: '925 Sterling Silver',
      inStock: true,
      featured: true,
      createdAt: new Date('2025-04-15')
    },
    {
      id: '2',
      name: 'Silver Ganesha Idol',
      category: 'idol',
      subcategory: 'deities',
      price: 150,
      description: 'Pure silver Lord Ganesha idol with fine craftsmanship.',
      details: 'This Silver Ganesha Idol is a work of superior craftsmanship, handcrafted by master silversmiths. Lord Ganesha, the remover of obstacles, is depicted in a seated posture with traditional attributes. This idol is perfect for your home altar or as a thoughtful gift for religious occasions.',
      images: [
        'https://media-hosting.imagekit.io/39346a228fd74345/ganesha%20idol.jpg?Expires=1840300851&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=x-7MuPoxq~40MoOM9CkPHFnQsCxYnyCkbSlkDxxITImmvCZlafISuPUHcbXaIRenGacpZ1Ep9RllwDKGaOvuTJlnJens0dVxAlHFxAtXNg6IGDxtVAQd62qIoX6NTccsgoGEwTyesVymb5zfDf3A1OKz2P9UCxciE-fjFPEwxH-4N~wdmiTCdtV1wAH7lrDQ2CVpjYQ~4o7YqoKyjDby5tei-6shGB3tnJyRrt~~kZUv7B2NPYaY3jHazbQgp2HRkZrr7Ef1sm-R7pGdFnE2z5iKkLwqn17UZXl~FcwfHR4r7sg149y8tSIb06~lbZRSS-h6oyOKBXzVkDW4FPPtMQ__'
      ],
      weight: '250 grams',
      material: 'Pure Silver (99.5%)',
      dimensions: '6" x 4" x 8"',
      inStock: true,
      featured: true,
      createdAt: new Date('2025-04-05')
    }
  ];
  saveProducts();
};

// Initialize on module load
initializeProducts();

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return [...mockProducts];
};

// Get featured products
export const getFeaturedProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.filter(product => product.featured);
};

// Get product by ID
export const getProductById = async (id: string): Promise<Product | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(product => product.id === id);
};

// Get products by category
export const getProductsByCategory = async (category: 'jewelry' | 'idol'): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.filter(product => product.category === category);
};

// Create a new product (for admin)
export const createProduct = async (product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  
  mockProducts.push(newProduct);
  saveProducts();
  
  return newProduct;
};

// Update a product (for admin)
export const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const productIndex = mockProducts.findIndex(p => p.id === id);
  if (productIndex === -1) return undefined;
  
  mockProducts[productIndex] = { ...mockProducts[productIndex], ...updates };
  saveProducts();
  
  return mockProducts[productIndex];
};

// Delete a product (for admin)
export const deleteProduct = async (id: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const initialLength = mockProducts.length;
  mockProducts = mockProducts.filter(p => p.id !== id);
  
  if (mockProducts.length !== initialLength) {
    saveProducts();
    return true;
  }
  return false;
};

// Clear all products (for admin/testing)
export const clearAllProducts = async (): Promise<boolean> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  mockProducts = [];
  saveProducts();
  return true;
};
