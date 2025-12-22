import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ReviewCardSkeleton() {
  return (
    <div className="card" style={{height:'250px',border:'none'}} >
      <Skeleton height={150} />
      <Skeleton height={20}/>
      <Skeleton height={20} width="60%" />
    </div>
  );
}

export default ReviewCardSkeleton;
