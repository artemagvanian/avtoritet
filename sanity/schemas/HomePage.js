export default {
  title: "Home Page",
  name: "homePage",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Description Image",
      name: "descriptionImage",
      type: "image",
    },
    {
      title: "Carousel",
      name: "carousel",
      type: "array",
      of: [{ type: "carouselItem" }],
    },
    {
      title: "Media Links",
      name: "mediaLinks",
      type: "array",
      of: [{ type: "mediaLink" }],
    },
  ],
};
