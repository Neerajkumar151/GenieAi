import React from 'react';

// Import images from assets
import image1 from '../assets/image1.PNG';
import image2 from '../assets/image2.PNG';
import image3 from '../assets/image 3.PNG';
import image4 from '../assets/image 4.PNG';
import image5 from '../assets/image 5.PNG';
import image6 from '../assets/image 6.PNG';

const SiteOverview = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className='px-4 sm:px-20 xl:px-32 my-24 text-center'>
        <h1 className='text-slate-700 text-[42px] font-semibold'>
          What GenieAi Can Do for You
        </h1>
        <p className='text-gray-500 max-w-lg mx-auto'>
          A glimpse of the AI-powered features that simplify, beautify, and automate your workflow.
        </p>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
          {images.map((url, i) => (
            <div
              key={i}
              className="relative group flex-grow transition-all w-60 rounded-lg overflow-hidden h-[400px] duration-400 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={url}
                alt={`image${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SiteOverview;
