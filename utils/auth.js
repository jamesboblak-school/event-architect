const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/auth');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  