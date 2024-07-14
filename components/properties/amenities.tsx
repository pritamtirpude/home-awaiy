import { Amenity } from "@/utils/amenities";
import { LuFolderCheck } from "react-icons/lu";
import Title from "./Title";

function Amenities({ amenities }: { amenities: string }) {
  const amenitiesList: Amenity[] = JSON.parse(amenities as string);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);

  if (noAmenities) return null;

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid gap-x-4 md:grid-cols-2">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="mb-2 flex items-center gap-x-4">
              <LuFolderCheck className="size-6 text-primary" />
              <span className="text-sm font-light capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Amenities;
