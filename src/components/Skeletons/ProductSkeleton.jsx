import { RiImageFill } from "react-icons/ri";

const ProductSkeleton = () => {
  return (
    <div className="card card-side border border-gray-200 p-0 relative">
      <div className="w-1/4 animate-skeleton grid place-items-center">
        <RiImageFill size={28} />
      </div>
      <div className="card-body w-3/4">
        <h2 className="card-title animate-skeleton w-full h-7"> </h2>
        <p className="animate-skeleton w-16 h-5"></p>
        <div className="card-actions justify-end">
          <div className="animate-skeleton w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
