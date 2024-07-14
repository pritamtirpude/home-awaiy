import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import { createPropertyAction } from "@/utils/actions";
import SubmitButton from "@/components/form/buttons";
import PriceInput from "@/components/form/price-input";
import CategoriesInput from "@/components/form/categories-input";
import TextAreaInput from "@/components/form/textarea-input";
import CountriesInput from "@/components/form/countries-input";
import ImageInput from "@/components/form/image-input";
import CounterInput from "@/components/form/counter-input";
import AmenitiesInput from "@/components/form/amenities-input";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">
        create property
      </h1>
      <div className="rounded border p-8">
        <h3 className="mb-4 text-lg font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="mb-4 grid gap-8 md:grid-cols-2">
            <FormInput
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here"
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          {/* text area / description */}
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000)"
          />
          <div className="mt-4 grid gap-8 sm:grid-cols-2">
            <CountriesInput />
            <ImageInput />
          </div>
          <h3 className="mb-4 mt-8 text-lg font-medium">
            Accommodation Details
          </h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="baths" />
          <h3 className="mb-6 mt-10 text-lg font-medium">Amenities</h3>
          <AmenitiesInput />
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
