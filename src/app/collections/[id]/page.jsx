// app/collections/[id]/page.jsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/app/lib/sliderData';
import { useProductStore } from '@/app/store/productStore';
import Footer from '@/app/components/Footer';

export default function CollectionsPage({ params }) {
  const imageId = parseInt(params.id);
  const imageData = slides.find(slide => slide.id === imageId);

  const { fetchProducts, products, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts(); // ✅ fetch from API on mount
  }, [fetchProducts]);

  if (!imageData) return <p>Image not found</p>;

  return (
    <>
      <section className='hero-section'>
        <div className="slider-image mt-20">
          <Image
            src={imageData.img}
            alt={`slider-img-${imageData.id}`}
            style={{ height: "250px", objectFit: "cover" }}
          />
        </div>
      </section>

            {/* Existing innerPageData rendering */}
            {
        imageData.innerPageData &&
        <section className='section-2'>
          <div className="images-category flex text-center gap-5 wrap justify-center mt-10">
            {
              imageData.innerPageData.map((item, index) => (
                <div className="image" key={index}>
                  <Image src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
        </section>
      }

      {/* ✅ Show API-fetched products */}
<section className="api-products mt-10 text-center">
  <h2 className="text-xl font-bold mb-4">Products Fetched from API</h2>
  {loading && <p>Loading...</p>}
  {error && <p className="text-red-500">Error: {error}</p>}
  <div className="flex flex-wrap justify-center gap-6">
    {products.map(product => (
      <div
        key={product.id}
        className="w-56 bg-white cursor-pointer rounded-xl shadow-md overflow-hidden relative group transition-transform duration-300 hover:scale-105"
      >
        {/* Top Left Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          -20%
        </span>

        {/* Top Right Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
            ❤️
          </button>
          <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100">
            👁️
          </button>
        </div>

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="p-3">
          <p className="text-sm font-medium truncate">{product.title}</p>
          <p className="text-sm text-gray-600">${product.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>
<Footer/>

    </>
  );
}
