import PropertyCard from "../card/property-card";
import { PropertyCardProps } from "@/utils/types";

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </section>
  );
}

export default PropertiesList;
