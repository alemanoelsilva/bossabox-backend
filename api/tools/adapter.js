'use strict';

exports.getAllTools = async ({
  params,
  repository,
  formatters,
  logger,
  onSuccess,
  onError,
}) => {
  try {
    logger.info('Filter tools by', params);
    console.log('Filter tools by', params);

    const { tools, count } = await repository.getAll(params);

    return onSuccess({ data: { tools: formatters.response(tools), count } });
  } catch (error) {
    logger.error(error);
    return onError(error);
  }
};

exports.createTool = async ({
  payload,
  repository,
  logger,
  onSuccess,
  onError,
}) => {
  try {
    logger.info('Create tool with', payload);

    const tool = await repository.save(payload);

    return onSuccess({ data: { tool }, statusCode: 201 });
  } catch (error) {
    logger.error(error);
    return onError(error);
  }
};

exports.deleteTool = async ({
  params,
  repository,
  logger,
  onSuccess,
  onError,
}) => {
  try {
    logger.info('Delete tool with', params);

    const DELETED = {
      '0': 'Tool was not found out',
      '1': 'Tool was deleted with success',
    };

    const STATUS_CODE = {
      '0': 204,
      '1': 200,
    };

    const result = await repository.delete(params);

    return onSuccess({ data: { message: DELETED[result] }, statusCode: STATUS_CODE[result] });
  } catch (error) {
    logger.error(error);
    return onError(error);
  }
};
