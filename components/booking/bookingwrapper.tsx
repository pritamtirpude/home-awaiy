"use client";

import { useProperty } from "@/utils/store";
import { Booking } from "@/utils/types";
import BookingCalendar from "./bookingcalendar";
import BookingContainer from "./bookingcontainer";
import { Fragment, useEffect } from "react";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

function BookingWrapper({ propertyId, price, bookings }: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);
  return (
    <Fragment>
      <BookingCalendar />
      <BookingContainer />
    </Fragment>
  );
}

export default BookingWrapper;
