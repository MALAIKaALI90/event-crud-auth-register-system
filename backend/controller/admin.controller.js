import jwt from "jsonwebtoken";
import { Admin } from "../model/admin.model.js";

const adminLogin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      // Generate JWT token
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

      res.cookie("token", token, {
      httpOnly: true,
  secure: false,
  sameSite: "Lax", 
});


      const user = await Admin.create({ name, email, password });

      return res.json({
        success: true,
        message: "Login successful",
        token,
        user,
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid login credentials" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default adminLogin;
