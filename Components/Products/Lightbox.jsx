/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const Lightbox = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <Modal open={true} onClose={onClose} className="overflow-auto">
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-4/5 flex flex-col md:flex-row p-6 relative max-h-[90vh] overflow-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-4 right-4 flex justify-end space-x-2 z-10">
            <Button
              variant="outlined"
              onClick={handlePrev}
              sx={{

                '&:hover': {
                  backgroundColor: '#036570',
                  color: '#fff',
                  borderColor: '#036570',
                },
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              onClick={handleNext}
              sx={{
                marginRight: 2,
                '&:hover': {
                  backgroundColor: '#036570',
                  color: '#fff',
                  borderColor: '#036570',
                },
              }}
            >
              Next
            </Button>
          </div>
          {/* Lightbox Content */}
          <div className="flex flex-col md:flex-row w-full h-full justify-center overflow-hidden">
            {/* Image */}
            <div className='w-full md:w-1/2 p-4 mt-4 justify-center'>
              <img
                src={currentImage.src}
                alt={currentImage.name}
                className="object-contain rounded-lg md:mb-0 max-h-[70vh] m-auto mt-4"
              />
            </div>
            {/* Description */}
            <div className="flex flex-col w-full md:w-1/2 m-4 mt-10 overflow-y-auto scrollbar-hidden">
              <h2 className="text-2xl font-semibold mb-2">{currentImage.name}</h2>
              <p className="text-lg mb-4 text-black opacity-90">{currentImage.description}</p>
              <Button
                variant="contained"
                onClick={onClose}
                className="bg-blue-500 text-white hover:bg-blue-600 w-max">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Lightbox;
