"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <>
      <div className="flex h-[380px] items-center justify-center bg-accent lg:h-[670px] lg:w-[90%] lg:max-w-[736px] lg:rounded-xl">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[90%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="my-8 grid grid-cols-4 gap-4 px-5 lg:absolute lg:bottom-0 lg:left-5 lg:top-0 lg:mt-8 lg:flex lg:max-h-[357.5px] lg:max-w-[77px] lg:flex-col">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex items-center justify-center rounded-lg bg-accent md:h-[100px] lg:h-[77px] lg:w-[77px] lg:bg-black
                ${
                  imageUrl === currentImage &&
                  "border-2 border-solid border-primary"
                }
            `}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] "
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductImages;
