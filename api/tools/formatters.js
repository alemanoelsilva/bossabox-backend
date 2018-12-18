'use strict';

exports.formatterResponseTools = moment => data => data.map(tool => ({
  id: tool.id,
  title: tool.title,
  link: tool.link,
  description: tool.description,
  tags: tool.tags,
  createdAt: moment(tool.createdAt).format('MMMM Do YYYY, h:mm:ss a'),
}));
