type TLoadingSkeletonProps = {
   title?: string;
};

const LoadingSkeleton = ({ title }: TLoadingSkeletonProps) => {
   return (
      <div className="text-center">
         <h2 className="text-2xl text-primary">
            {title ? title : "Loading..."}
         </h2>
      </div>
   );
};

export default LoadingSkeleton;
