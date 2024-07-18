import EmptyList from "@/components/home/empty-list";
import {
  deleteReviewAction,
  fetchPropertyReviewsByUser,
} from "@/utils/actions";
import ReviewCard from "@/components/reviews/reviewcard";
import Title from "@/components/properties/title";
import FormContainer from "@/components/form/form-container";
import { IconButton } from "@/components/form/buttons";
import { Fragment } from "react";

async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) return <EmptyList />;
  return (
    <Fragment>
      <Title text="Your Reviews" />
      <section className="mt-4 grid gap-8 md:grid-cols-2">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { image, name } = review.property;
          const reviewInfo = {
            comment,
            rating,
            name,
            image,
          };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </Fragment>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    // @ts-ignore
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
