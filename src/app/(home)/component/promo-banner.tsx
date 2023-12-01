import Image, { ImageProps } from "next/image";

interface PromoBannerProps extends Omit<ImageProps, "src"> {
  srcMobile?: string;
  srcDesktop?: string;
}

const PromoBanner = ({
  alt,
  srcMobile,
  srcDesktop,
  ...props
}: PromoBannerProps) => {
  return (
    <div className="relative">
      {/* Imagem para celular */}
      <div className="lg:hidden">
        {srcMobile && (
          <Image
            width={0}
            height={0}
            className="h-auto w-full px-5"
            sizes="100vw"
            alt={alt}
            src={srcMobile}
            style={{
              objectFit: "contain",
            }}
            {...props}
          />
        )}
      </div>
      {/* Imagem para desktop */}
      <div className="hidden lg:block">
        {srcDesktop && (
          <Image
            width={0}
            height={0}
            className="h-auto w-full"
            alt={alt}
            sizes="100vw"
            src={srcDesktop}
            style={{
              objectFit: "contain",
            }}
            {...props}
          />
        )}
      </div>
    </div>
  );
};

export default PromoBanner;
