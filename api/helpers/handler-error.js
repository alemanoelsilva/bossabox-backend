'use strict';

module.exports = response => error => {
  if (error.isJoi) {
    return response.status(400).json({
      name: error.name,
      message: error.message,
      details: error.details,
      status_code: error.status || 400,
    });
  }

  return response.status(error.status || 500).json({
    name: error.name || 'IntervalServerError',
    message: error.message || 'internal server error',
    details: error.details || [error],
    status_code: error.status || 500
  });
};
