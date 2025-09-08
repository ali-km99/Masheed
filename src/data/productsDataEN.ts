import type { ProductCategory } from '@/types/products'

export const productsDataEN: ProductCategory[] = [
  {
    id: 'Waterproofing',
    mainImg: 'https://i.postimg.cc/9z3S9yxZ/product1.jpg',
    name: 'Waterproofing',
    text: 'Concrete or hollow walls alone are not enough to ensure full waterproofing. We provide specialized solutions for complete protection against water leakage.',
    products: [
      {
        name: 'weber silicone FS',
        title: 'High-performance silicone sealant for fire and water resistance',
        type: ['Wall', 'Floor', 'Ceiling'],
        img: 'https://i.postimg.cc/dVRM8Sc1/product10.jpg',
        text: 'A silicone-based sealant designed for concrete joints and fire-resistant partitions.',
      },
      {
        name: 'weber joint seal',
        title: 'Flexible silicone filler for joints',
        type: ['Walls', 'Ceilings'],
        img: 'https://i.postimg.cc/c1jNZncs/product11.jpg',
        text: 'Formulated to close expansion joints with high flexibility and weather resistance.',
      },
      {
        name: 'weber hydro shield',
        title: 'Waterproof coating for roofs',
        type: ['Roofs', 'Tanks'],
        img: 'https://i.postimg.cc/jd7YjS8y/product12.jpg',
        text: 'A liquid protective layer that ensures long-lasting water resistance for roofs and tanks.',
      },
      {
        name: 'weber roof guard',
        title: 'Protective coating for concrete roofs',
        type: ['Roofs', 'Exposed floors'],
        img: 'https://i.postimg.cc/xCCWVfJJ/product4.jpg',
        text: 'Provides excellent weather resistance and prevents water infiltration on exposed concrete surfaces.',
      },
      {
        name: 'weber flex seal',
        title: 'Flexible sealant for bathrooms and kitchens',
        type: ['Floor', 'Wall'],
        img: 'https://i.postimg.cc/HxhFpqXS/product3.jpg',
        text: 'Perfect for wet areas like bathrooms and kitchens with superior moisture resistance.',
      },
      {
        name: 'weber tank coat',
        title: 'Underground tank waterproofing material',
        type: ['Tanks', 'Underground walls'],
        img: 'https://i.postimg.cc/vmMskwtf/product20.jpg',
        text: 'Prevents water leakage in underground tanks and extends their service life.',
      },
    ],
  },
  {
    id: 'Tile fixing',
    mainImg: 'https://i.postimg.cc/mDgGZ3qr/product15.jpg',
    name: 'Tile fixing',
    text: 'We provide specialized tile fixing solutions that ensure strong adhesion and durability under all conditions.',
    products: [
      {
        name: 'tile adhesive X1',
        title: 'High-strength indoor tile adhesive',
        type: ['Floor', 'Walls'],
        img: 'https://i.postimg.cc/mDgGZ3qr/product15.jpg',
        text: 'An indoor adhesive with excellent bonding strength and moisture resistance.',
      },
    ],
  },
  {
    id: 'Tile fixing',
    mainImg: 'https://i.postimg.cc/Z5ztvzg2/product19.png',
    name: 'Tile fixing',
    text: 'Outdoor tile fixing materials that provide excellent stability and weather resistance.',
    products: [
      {
        name: 'tile adhesive Outdoor',
        title: 'Adhesive for exterior tiling',
        type: ['Outdoor floors', 'Facades'],
        img: 'https://i.postimg.cc/Z5ztvzg2/product19.png',
        text: 'Designed to withstand harsh weather conditions and thermal expansion of outdoor tiles.',
      },
    ],
  },
  {
    id: 'Tile fixing',
    mainImg: 'https://i.postimg.cc/8CHSVXZ3/product18.jpg',
    name: 'Tile fixing',
    text: 'A wide range of adhesives for all types of tiling applications, both indoor and outdoor.',
    products: [
      {
        name: 'tile adhesive Flex',
        title: 'Flexible tile adhesive for floors',
        type: ['Floor'],
        img: 'https://i.postimg.cc/5tpZrY0W/product8.jpg',
        text: 'A flexible adhesive designed for heavy-duty flooring and large-format tiles.',
      },
      {
        name: 'tile adhesive WallPro',
        title: 'Wall adhesive for interiors',
        type: ['Walls'],
        img: 'https://i.postimg.cc/xCCWVfJJ/product4.jpg',
        text: 'Provides strong adhesion and moisture resistance for indoor wall applications.',
      },
      {
        name: 'tile adhesive RapidSet',
        title: 'Fast-setting tile adhesive',
        type: ['Floor', 'Walls'],
        img: 'https://i.postimg.cc/HxhFpqXS/product3.jpg',
        text: 'Formulated for projects requiring quick installation with high durability.',
      },
    ],
  },
  {
    id: 'coming-soon',
    mainImg:
      'https://i.postimg.cc/W3LYjpnt/pngtree-coming-soon-under-construction-with-wrench-and-hammer-icon-vector-png-image-14109575.png', // ضع صورة مناسبة أو صورة مؤقتة
    name: 'More Products Coming Soon',
    text: 'Stay tuned for exciting new products launching soon to better meet your needs.',
    products: [],
  },
]
