'use strict';

exports.getAllUsers = async ({
  query,
  services,
  extractNumberOfString,
  onSuccess,
  onError,
}) => {
  try {
    const result = await services.getUsers(query);

    return onSuccess({
      data: {
        users: result.data,
        nextPage: extractNumberOfString(result.headers.link.split(';')[0])
      },
    });
  } catch (error) {
    console.log(error);
    return onError(error);
  }
};

exports.getUserByUsername = async ({
  params,
  services,
  onSuccess,
  onError,
}) => {
  try {
    const result = await services.getUser(params.username);

    return onSuccess({ data: result.data });
  } catch (error) {
    console.error(error);
    return onError(error);
  }
};

exports.getRepositories = async ({
  params,
  query,
  services,
  onSuccess,
  onError,
}) => {
  try {
    const repos = await services.getRepositoriesByUser(params.username, query);

    return onSuccess({ data: repos.data });
  } catch (error) {
    console.error(error);
    return onError(error);
  }
};
