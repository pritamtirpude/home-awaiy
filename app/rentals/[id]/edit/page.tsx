import {
  fetchRentalDetails,
  updatePropertyAction,
  updatePropertyImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import CategoriesInput from "@/components/form/categories-input";
import PriceInput from "@/components/form/price-input";
import TextAreaInput from "@/components/form/textarea-input";
import CountriesInput from "@/components/form/countries-input";
import CounterInput from "@/components/form/counter-input";
import AmenitiesInput from "@/components/form/amenities-input";
import SubmitButton from "@/components/form/buttons";
import { redirect } from "next/navigation";
import { Amenity } from "@/utils/amenities";
import ImageInputContainer from "@/components/form/image-input-container";

async function EditRentalPage({ params }: { params: { id: string } }) {
  const property = await fetchRentalDetails(params.id);

  if (!property) redirect("/");

  const defaultAmenities: Amenity[] = JSON.parse(property.amenities);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">Edit Property</h1>
      <div className="rounded-md border p-8">
        <ImageInputContainer
          name={property.name}
          text="Update Image"
          action={updatePropertyImageAction}
          image={property.image}
        >
          <input type="hidden" name="id" value={property.id} />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input type="hidden" name="id" value={property.id} />
          <div className="mb-4 mt-8 grid gap-8 md:grid-cols-2">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue={property.name}
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue={property.tagline}
            />
            <PriceInput defaultValue={property.price} />
            <CategoriesInput defaultValue={property.category} />
            <CountriesInput defaultValue={property.country} />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 100 words)"
            defaultValue={property.description}
          />
          <h3 className="mb-4 mt-8 text-lg font-medium">
            Accomodation Details
          </h3>
          <CounterInput detail="guests" defaultValue={property.guests} />
          <CounterInput detail="bedrooms" defaultValue={property.bedrooms} />
          <CounterInput detail="beds" defaultValue={property.beds} />
          <CounterInput detail="baths" defaultValue={property.baths} />
          <h3 className="mb-6 mt-10 text-lg font-medium">Amenities</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          <SubmitButton text="edit property" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditRentalPage;
