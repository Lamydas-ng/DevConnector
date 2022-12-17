// validate the token

const jwt = require("jsonwebtoken");

const secret = "jwtSecret";
// req: request
// res : response
// next : next handler / callback.
module.exports = (req, res, next) => {
  console.log("hello from auth middleware");
  // get the token
  //const token = req.header("x-auth-token");
  // header : x-auth-token.

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
  //  const token2 = authHeader && authHeader.split(" ");

  //if (token == null) return res.sendStatus(401)

  console.log(token);
  if (!token) {
    return res.status(401).json({
      error: "no token, authorization denied",
    });
  }
  // verify the token : IMP
  try {
    jwt.verify(token, "jwtSecret", (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid", });
      } else {
          req.user = decoded.user;
         // req.token = decoded.token;
        // user details will be attached to the existing request.
        next();
        // next will next middleware / it will go to the router.
      }
    });
  } catch (err) {
    console.error(JSON.stringify(err));
    return res.status(500).json({ msg: "server error" });
  }
};
