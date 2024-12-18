module.exports.isAuthenticated = async (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).send({ 
      message: 'Unauthorized. Please log in to access this resource.',
      redirectTo: '/login'
    })
  }
}