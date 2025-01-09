const logger = (req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} request to ${req.url}`);
    next(); // Proceed to the next middleware or route handler
  };

  modules.exports=logger;