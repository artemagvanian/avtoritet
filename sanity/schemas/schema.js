/* eslint-disable import/no-unresolved */

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import CarForSale from "./CarForSale";
import Partner from "./Partner";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CarouselItem from "./CarouselItem";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    HomePage,
    AboutPage,
    CarForSale,
    Partner,
    CarouselItem,
  ]),
});
