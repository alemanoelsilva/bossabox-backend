'use strict';

exports.getAllTools = async ({
  params,
  repository,
  formatters,
  onSuccess,
  onError,
}) => {
  try {
    const { tools, count } = await repository.getAll(params);

    return onSuccess({ data: { tools: formatters.response(tools), count } });
  } catch (error) {
    console.log(error);
    return onError(error);
  }
};

exports.createTool = async ({
  payload,
  repository,
  onSuccess,
  onError,
}) => {
  try {
    const tool = await repository.save(payload);

    return onSuccess({ data: { tool } });
  } catch (error) {
    console.error(error);
    return onError(error);
  }
};

exports.deleteTool = async ({
  params,
  repository,
  onSuccess,
  onError,
}) => {
  try {
    const DELETED = {
      '1': 'Tool was deleted with success',
      '0': 'Tool was not found out'
    };

    const result = await repository.delete(params);

    return onSuccess({ data: { message: DELETED[result] }, statusCode: 404 });
  } catch (error) {
    console.error(error);
    return onError(error);
  }
};
