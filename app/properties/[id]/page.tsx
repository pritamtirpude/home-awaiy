import FavoriteToggleButton from "@/components/card/favorite-toggle-button";
import PropertyRating from "@/components/card/property-rating";
import Amenities from "@/components/properties/amenities";
import BreadCrumbs from "@/components/properties/breadcrumbs";
import Description from "@/components/properties/description";
import ImageContainer from "@/components/properties/imagecontainer";
import PropertyDetails from "@/components/properties/propertydetails";
import ShareButton from "@/components/properties/sharebutton";
import UserInfo from "@/components/properties/userinfo";
import { Separator } from "@/components/ui/separator";
import { fetchPropertyDetails, findExistingReview } from "@/utils/actions";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import SubmitReview from "@/components/reviews/submitreview";
import PropertyReviews from "@/components/reviews/propertyreviews";
import { auth } from "@clerk/nextjs/server";

const DynamicMap = dynamic(
  () => import("@/components/properties/propertymap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

const DynamicBookingWrapper = dynamic(
  () => import("@/components/booking/bookingwrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[200px] w-full" />,
  }
);

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  const { baths, bedrooms, beds, guests } = property;

  const details = { baths, bedrooms, beds, guests };

  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;

  const { userId } = auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="mt-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className="flex items-center gap-4">
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <section className="mt-12 gap-x-12 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-x-4">
            <h1 className="text-xl font-bold">{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          <DynamicMap countryCode={property.country} />
        </div>
        <div className="flex flex-col items-center lg:col-span-4">
          {/* calendar */}
          <DynamicBookingWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.bookings}
          />
        </div>
      </section>
      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>
  );
}

export default PropertyDetailsPage;
