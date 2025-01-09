const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
    res.status(500).json({
      message: 'An internal server error occurred',
      error: err.message, // In production, avoid sending full error details to users
    });
  };

  modules.exports = errorHandler;