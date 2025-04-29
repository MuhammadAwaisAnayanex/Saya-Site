// app/collections/[id]/page.jsx

import Image from 'next/image';
import { slides } from '@/app/lib/sliderData';

export default function CollectionsPage({ params }) {
  const imageId = parseInt(params.id);
  const imageData = slides.find(slide => slide.id === imageId);

  if (!imageData) return <p>Image not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src={imageData.img}
        alt={`slider-img-${imageData.id}`}
        width={800}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
