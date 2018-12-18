'use strict';

module.exports = response => error => {
  if (error.isJoi) {
    return response.status(400).json({
      data: {},
      error: {
        status_code: 400,
        message: error.message,
        details: error.details
      }
    });
  }

  return response.status(error.status || 500).json({
    name: error.name || 'IntervalServerError',
    message: error.message || 'internal server error',
    details: error.details || [error],
    status_code: error.status || 500
  });
};
