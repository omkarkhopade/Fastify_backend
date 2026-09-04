const authController =  require("../controllers/authController.js");

module.exports = async function (fastify, opts) {
    fastify.post("/register",authController.register); //register
    fastify.post("/login",authController.login); //login
    fastify.post("/forgot-password",authController.forgotPassword); //forgot password
    fastify.post("/reset-password/:token",authController.resetPassword); //reset password
    fastify.post(
      "/logout",  // logout 
      { preHandler: [fastify.authenticate] },
      authController.logout
    );
};
