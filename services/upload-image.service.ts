import { v2 as cloudinary } from "cloudinary";

// Función para validar las variables de entorno
function validateEnvVariables() {
  const requiredEnvVars = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`${envVar} is not set`);
    }
  });
}

// Validar las variables de entorno
validateEnvVariables();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage({
  image,
  folderName,
}: {
  image: File;
  folderName: string;
}) {
  try {
    const imageData = await image.arrayBuffer();
    const mime = image.type;
    const encoding = "base64";
    const base64Data = Buffer.from(imageData).toString("base64");
    const fileUri = "data:" + mime + ";" + encoding + "," + base64Data;
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: folderName,
    });
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el llamador de la función
  }
}
