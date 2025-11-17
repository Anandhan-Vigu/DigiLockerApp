import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Loader from './Loader'; // ⬅️ your loader component

interface ImageTextCarouselItem {
  image: string;
  label: string;
  link: string;
}

interface ImageTextCarouselProps {
  name: string;
}

export default function ImageTextCarousel({ name }: ImageTextCarouselProps) {
  const [utilities, setUtilities] = useState<ImageTextCarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUtilities = async () => {
      try {
        const res = await fetch(`/json-data/${name}.json`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setUtilities(data);
      } catch (err) {
        console.error("Failed to load utilities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUtilities();
  }, [name]);

  return (
    <div className='flex flex-col gap-5 min-h-48'>

      {/* ===== LOADER ===== */}
      {loading && (
        <div className="w-full flex justify-center items-center min-h-40">
          <Loader size={45} />
        </div>
      )}

      {/* ===== CONTENT ===== */}
      {!loading && (
        <>
          <div className="flex min-h-40 gap-10 w-full overflow-x-auto scrollbar-hide text-black whitespace-nowrap">
            {utilities.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(item.link)}
                className={`flex flex-col gap-1 min-w-20 cursor-pointer ${index === 0 ? 'ml-5' : ''}`}
              >
                <div className='bg-white rounded-full flex items-center justify-center h-24 w-24'>
                  <img className="h-12 w-12" src={item.image} alt={item.label} />
                </div>
                <p className='text-wrap text-center text-sm'>{item.label}</p>
              </div>
            ))}
          </div>

          <a href='/search' className='px-10 py-3 mx-auto shadow-2xl rounded-4xl bg-white text-violet-900 w-fit font-semibold text-base flex items-center gap-3'>
            Explore More
            <FaArrowRight />
          </a>
        </>
      )}
    </div>
  );
}
