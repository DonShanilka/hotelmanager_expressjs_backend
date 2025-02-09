import { Request } from "express";
import { UploadedFile } from "express-fileupload";

// Define the expected type for req.files
interface Files {
  image?: UploadedFile | UploadedFile[];
}

export function extractImages(req: Request): Buffer {
  // Type assertion for req.files as Files
  const image = (req.files as Files)?.image;

  if (image && Array.isArray(image)) {
    // If it's an array, handle multiple files
    return image[0]?.data || Buffer.alloc(0); // Return first image or empty buffer if not available
  } else if (image) {
    // If it's a single file
    return image.data;
  }

  // Return an empty buffer if no image is found
  return Buffer.alloc(0);
}
