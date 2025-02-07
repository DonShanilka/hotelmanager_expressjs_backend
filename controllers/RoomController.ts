import multer from "multer";
import { Request, Response } from "express";
import { RoomAdd } from "../services/RoomService";

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "downloads/"); // Ensure "uploads" folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});

// File filter (only images)
const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only images allowed!"), false);
  }
};

// Initialize Multer
const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } }); // 5MB limit

// Controller function with Multer middleware
export const saveRoom = async (req: Request, res: Response) => {
  upload.single("selectedImage")(req, res, async (err) => {
    if (err) {
      console.error("Multer Error:", err);
      return res.status(400).json({ error: err.message });
    }

    try {
      console.log("Received Data:", req.body);

      const { roomNumber, roomType, hallFloor, price, status } = req.body;
      const hallFloorNum = parseInt(hallFloor, 10);
      const priceNum = parseFloat(price);
      const imagePath = req.file ? `/downloads/${req.file.filename}` : ""; // Ensure it's a string

      const roomData = {
        roomNumber,
        roomType,
        selectedImage: imagePath, // Save path to database
        hallFloor: hallFloorNum,
        price: priceNum,
        status,
      };

      const newRoom = await RoomAdd(roomData);
      res.status(200).json(newRoom);
    } catch (error) {
      console.error("Error Adding Room: ", error);
      res.status(500).json({ error: "Error Adding Room" });
    }
  });
};
