export default {
  title: "Current Offer",
  name: "currentOffer",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
};
