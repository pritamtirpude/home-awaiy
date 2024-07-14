"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../form/form-container";
import { toggleFavoriteAction } from "@/utils/actions";
import { CardSubmitButton } from "../form/buttons";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
