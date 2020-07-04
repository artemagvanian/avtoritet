// in sanity-structure.js

import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["aboutPage", "homePage"].includes(listItem.getId())
      ),
    ]);
