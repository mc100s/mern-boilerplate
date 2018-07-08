module.exports = {
  // This secret should be in an environment variable instead
  jwtSecret: process.env.JWT_SECRET || 'MyS3cr3tK3Y',
  jwtSession: {
    session: false,
  },
};