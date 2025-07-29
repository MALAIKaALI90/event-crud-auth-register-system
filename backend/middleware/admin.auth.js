import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token; 
    console.log("token1:", token);

    if (!token) {
      return res.status(401).json({ success: false, message: "Token not found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Unauthorized access" });
    }

    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

export { auth };
