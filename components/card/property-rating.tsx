import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";
import { fetchPropertyRating } from "@/utils/actions";

async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const { count, rating } = await fetchPropertyRating(propertyId);

  if (count === 0) return null;

  const countText = count > 1 ? "reviews" : "review";
  const countValue = `(${count}) ${inPage ? countText : ""}`;

  return (
    <span
      className={cn("flex gap-1 items-center", inPage ? "text-md" : "text-xs")}
    >
      <FaStar className="size-3" />
      {rating} {countValue}
    </span>
  );
}

export default PropertyRating;
