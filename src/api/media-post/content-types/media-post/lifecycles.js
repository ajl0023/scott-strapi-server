module.exports = {
  async beforeCreate(event) {
    const { slug, title } = event.params.data;
    await strapi.db.query("api::page.page").create({
      data: {
        title: title,
        slug: slug,
        api_url: "media-posts",
        publishedAt: new Date(),
      },
    });
    // let's do a 20% discount everytime
  },
};
