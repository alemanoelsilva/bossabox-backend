'use strict';

module.exports = (model) => ({
  save: data => model.create(data),

  getAll: async ({ tag }) => {
    const results = await model.findAll();

    const tools = results
      .map(result => result.dataValues)
      .filter(tool => tool.tags.some(tagTool => tagTool === tag || !tag ? tool : null));

    return {
      tools,
      count: tools.length
    };
  },

  delete: ({ id }) => model.destroy({
    where: { id }
  })
});
