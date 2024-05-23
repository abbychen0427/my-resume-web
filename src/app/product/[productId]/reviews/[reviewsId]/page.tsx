import React from "react";

const ReviewsDetail = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
  return (
    <div>
      Review {params.reviewsId} of product {params.productId}
    </div>
  );
};

export default ReviewsDetail;
