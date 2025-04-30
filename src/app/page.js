
import Image from "next/image";
import ReviewCarousel from "./components/ReviewCarousel";
import VerticalSwiper from "./components/VerticalSwiper";
import starImg from "@/app/assets/images/reviewSectionImg/starImg.png"
import svgImg1 from "@/app/assets/images/reviewSectionImg/1-percent.svg"
import svgImg2 from "@/app/assets/images/reviewSectionImg/1-percent-2.svg"
import svgImg3 from "@/app/assets/images/reviewSectionImg/bronze.svg"
import svgImg4 from "@/app/assets/images/reviewSectionImg/diamond.svg"
import svgImg5 from "@/app/assets/images/reviewSectionImg/diamond-2.svg"

export default function Home() {

  return (
    <>
      <VerticalSwiper/>
      <section className="reviews-section mt-5">
        <div className="container mx-auto">
          <p>Loved by You, Trusted by Many</p>
          <div className="star-logo flex gap-1">
          <Image src={starImg} alt="star img"  />
          <Image src={starImg} alt="star img"  />
          <Image src={starImg} alt="star img"  />
          <Image src={starImg} alt="star img"  />
          <Image src={starImg} alt="star img"  />
          </div>
          <p>from 19753 reviews</p>
          <div className="review-carousel">
            <ReviewCarousel />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="main-div flex items-center justify-center gap-5">
          <div className="text-section">
            <div className="stars flex gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <p>15398 reviews</p>
            </div>
            <p>Verified by
            Judge.me Logo</p>
          </div>
          <div className="logo-section flex gap-5">
            <Image src={svgImg1} />
            <Image src={svgImg2} />
            <Image src={svgImg3} />
            <Image src={svgImg4} />
            <Image src={svgImg5} />
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
