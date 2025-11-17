import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// ✅ Define TypeScript type for each banner
type BannerData = {
  id: number;
  title: string;
  year: number;
  description: string;
  buttonText: string;
  image: string;
  color: string;
  buttonColor: string;
  link:string

};

// ✅ Sample JSON data
const bannerData: BannerData[] = [
  {
    id: 1,
    title: 'Andhra Pradesh Open School Society (APOSS) 2025',
    year: 2025,
    description: 'SSC and IPE Marksheets',
    buttonText: 'Available Now',
    image: '/icons/new-in-digi-locker/ap.jpg',
    color: 'from-[#5b5fbf] to-[#8d8fef]',
    buttonColor: '#5b5fbf',
    link:'/form'
  },
  {
    id: 2,
    title: 'Central Board of Secondary Education-2025',
    year: 2025,
    description: 'Marksheets of Class X and XII',
    buttonText: 'Available Now',
    image: '/icons/new-in-digi-locker/cbsc.png',
    color: 'from-[#0472b2] to-[#43b6ef]',
    buttonColor: '#0472b2',
        link:'/form'


  },
  {
    id: 3,
    title: 'Board of Secondary Education, Rajasthan 2025',
    year: 2025,
    description: 'Marksheets of Class XII',
    buttonText: 'Available Now',
    image: '/icons/new-in-digi-locker/jk.jpg',
    color: 'from-[#1786d7] to-[#68c2ff]',
    buttonColor: '#1786d7',
        link:'/form'

  },
  {
    id: 4,
    title: 'Jammu and Kashmir Board of School Education-2025',
    year: 2025,
    description: 'Marksheets of Class X and XII',
    buttonText: 'Available Now',
    image: '/icons/new-in-digi-locker/manipur.jpg',
    color: 'from-[#6f308d] to-[#b07ed5]',
    buttonColor: '#6f308d',
        link:'/form'


  }
];

export default function SwiperWithDots() {
  return (
    <div className="w-full px-5">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        className="rounded-lg"
        style={{ paddingBottom: '35px' }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}

      >
        {/* ✅ Loop with typed data */}
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <APOSSMarksheetBanner data={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ✅ Add props type
type APOSSMarksheetBannerProps = {
  data: BannerData;
};

function APOSSMarksheetBanner({ data }: APOSSMarksheetBannerProps) {
  return (
    <div className={`flex items-center bg-linear-to-r ${data.color} px-3 gap-3 w-full min-h-48  `}>
      <img
        src={data.image}
        alt={`${data.title} Logo`}
        className="w-24 h-24  rounded-full"
      />
      <div className='flex flex-col gap-2'>
        <h2 className="font-bold  text-white text-lg">
          {data.title}
        </h2>
        <p className="text-white text-base font-bold">{data.description}</p>
        <a href={data.link} style={{ color: data.buttonColor }}
          className={` bg-white  font-semibold px-4 py-1 rounded-xl w-fit`}>
          {data.buttonText}
        </a>
      </div>
    </div>
  );
}
