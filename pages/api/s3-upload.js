import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadFileToS3(fileBuffer, fileName) {
  console.log(fileName);

  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/png",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  return fileName;
}

export default async function handler(req, res) {
  try {
    const formData = req.body;
    console.log()
    if (!formData || !formData.file) {
      return res.status(400).json({ error: "File data is required." });
    }

    const fileData = formData.file;
    const fileName = formData.filename || "example.png"; // Use original filename or default

    const buffer = Buffer.from(fileData, "base64");
    const uploadedFileName = await uploadFileToS3(buffer, fileName);

    return res
      .status(200)
      .json({ message: "File uploaded successfully!", fileName: uploadedFileName });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
