/* eslint-disable import/no-unresolved */

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import CarForSale from "./CarForSale";
import Partner from "./Partner";
import CarouselItem from "./CarouselItem";
import MediaLink from "./MediaLink";
import CurrentOffer from "./CurrentOffer";
import HomePage from "./HomePage";
import PlatformPage from "./PlatformPage";
import OnTheWayPage from "./OnTheWayPage";
import PartnerPage from "./PartnerPage";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    CarForSale,
    Partner,
    CarouselItem,
    MediaLink,
    CurrentOffer,
    HomePage,
    PlatformPage,
    OnTheWayPage,
    PartnerPage,
  ]),
});
