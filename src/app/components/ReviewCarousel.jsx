// components/ReviewCarousel.jsx
'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "@/app/styles/ReviewCarousel.css"
const reviews = [
  {
    id: "2b34395e",
    name: "amazing experience",
    title: "Wow beautiful print and colour",
    body: "it is a first ever website jis ki hr cheez sy satisfied hu...",
    product: "Printed Lawn Stitched 2 Piece (Shirt/Trouser)",
    date: "29/04/2025",
    stars: 5,
    link: "/products/printed-lawn-stitched-2-piece-shirt-trouser-167#judgeme_product_reviews"
  },
  {
    id: "c8546861",
    name: "Asghar Ali",
    title: "",
    body: "This dress is really really amazing. Design stuff all good...",
    product: "Unstitched Printed Khaddar Viscose 2 Piece (Shirt/Trouser)",
    date: "29/04/2025",
    stars: 5,
    link: "/products/unstitched-printed-khaddar-viscose-2-piece-shirt-trouser-34#judgeme_product_reviews"
  },
  {
    id: "c8546861",
    name: "Asghar Ali",
    title: "",
    body: "This dress is really really amazing. Design stuff all good...",
    product: "Unstitched Printed Khaddar Viscose 2 Piece (Shirt/Trouser)",
    date: "29/04/2025",
    stars: 5,
    link: "/products/unstitched-printed-khaddar-viscose-2-piece-shirt-trouser-34#judgeme_product_reviews"
  },
  // Add more review objects...
];

const ReviewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay infinite>
      {reviews.map((review) => (
        <div key={review.id} className=" slider-main-div">
          <div className="flex items-center mb-2">
            {Array.from({ length: review.stars }).map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <h3 className="font-bold text-lg">{review.title || "No Title"}</h3>
          <p className="text-sm mt-2">{review.body}</p>
          <div className="mt-4 text-xs text-gray-500">
            <div>{review.name}</div>
            <a href={review.link} className="text-blue-600">{review.product}</a>
            <div>{review.date}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
