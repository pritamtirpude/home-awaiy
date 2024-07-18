"use client";

import { useState } from "react";
import SubmitButton from "../form/buttons";
import FormContainer from "../form/form-container";
import { Card } from "../ui/card";
import RatingInput from "../form/rating-input";
import TextAreaInput from "../form/textarea-input";
import { Button } from "../ui/button";
import { createReviewAction } from "@/utils/actions";

function SubmitReview({ propertyId }: { propertyId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button onClick={() => setIsReviewFormVisible((prevState) => !prevState)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className="mt-8 p-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="your thoughts on this property"
              defaultValue="Amazing place !!!"
            />
            <SubmitButton text="Submit" className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
