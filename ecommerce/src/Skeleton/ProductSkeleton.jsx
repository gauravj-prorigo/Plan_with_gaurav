import Skeleton from "react-loading-skeleton";

function ProductSkeleton() {
  return (
    <div className="product" style={{backgroundColor:"transparent"}}>
     <Skeleton height={200} borderRadius={12} />
      <Skeleton height={20} style={{ marginTop: 10 }} />
      <Skeleton height={20} width="60%" />
    </div>
  );
}
export default ProductSkeleton;
