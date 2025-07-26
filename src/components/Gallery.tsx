import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
const galleryImages = [
  { src: '/images/gallery/IMG_8690.jpeg', alt: 'Students at Greek School' },
  { src: '/images/gallery/IMG_4306.jpeg', alt: 'Cultural activity at Greek School' },
  { src: '/images/gallery/IMG_0836.jpeg', alt: 'Greek language class' },
  { src: '/images/gallery/IMG_1660.jpeg', alt: 'Students learning Greek' },
  { src: '/images/gallery/IMG_1697.jpeg', alt: 'Cultural celebration' },
  { src: '/images/gallery/IMG_1158.jpeg', alt: 'Greek School event' },
  { src: '/images/gallery/IMG_2822.jpeg', alt: 'Students participating in activities' },
  { src: '/images/gallery/IMG_2806.jpeg', alt: 'Greek cultural learning' },
  { src: '/images/gallery/IMG_0255.jpeg', alt: 'School field trip' },
  { src: '/images/gallery/FullSizeRender.jpeg', alt: 'Greek School celebration' },
  { src: '/images/gallery/IMG_0866.jpeg', alt: 'Students learning Greek culture' },
  { src: '/images/gallery/IMG_9110.jpeg', alt: 'Greek language activities' },
  { src: '/images/gallery/IMG_8694.jpeg', alt: 'Cultural performance' },
  { src: '/images/gallery/IMG_2728.jpeg', alt: 'Greek School students' },
  { src: '/images/gallery/IMG_9170.jpeg', alt: 'Greek heritage celebration' },
  { src: '/images/gallery/IMG_2741.jpeg', alt: 'Students at cultural event' },
  { src: '/images/gallery/IMG_0982.jpeg', alt: 'Greek language learning' },
  { src: '/images/gallery/IMG_0952.jpeg', alt: 'School activities' },
  { src: '/images/gallery/IMG_8327(1).jpeg', alt: 'Students receiving certificates' },
  { src: '/images/gallery/IMG_1317.JPEG', alt: 'Live Greek Music Performance 1' },
  { src: '/images/gallery/IMG_1338.JPEG', alt: 'Live Greek Music Performance 2' },
  { src: '/images/gallery/IMG_1352.JPEG', alt: 'Live Greek Music Performance 3' },
  { src: '/images/gallery/IMG_1355.JPEG', alt: 'Live Greek Music Performance 4' },
  { src: '/images/gallery/IMG_6651.JPEG', alt: 'Student Picnic' }
];

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Photo Gallery</h2>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-center mb-8">
            Explore moments from our classes, cultural activities, and special events.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-64"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="italic text-gray-600">
              Photos showcase our school's activities, cultural events, and student achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-blue-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-[90vh] max-w-full mx-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

