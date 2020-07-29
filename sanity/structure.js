// in sanity-structure.js

import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Platform Page")
        .child(
          S.document().schemaType("platformPage").documentId("platformPage")
        ),
      S.listItem()
        .title("On The Way Page")
        .child(
          S.document().schemaType("onTheWayPage").documentId("onTheWayPage")
        ),
      S.listItem()
        .title("Partner Page")
        .child(
          S.document().schemaType("partnerPage").documentId("partnerPage")
        ),
      S.listItem()
        .title("Current Offer")
        .child(
          S.document().schemaType("currentOffer").documentId("currentOffer")
        ),
      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     !["homePage", "platformPage", "onTheWayPage", "partnerPage"].includes(
      //       listItem.getId()
      //     )
      // ),
    ]);
