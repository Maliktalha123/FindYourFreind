"use server";

export async function uploadImage(categoryForm) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const timeStamp = Math.floor(Date.now() / 1000);
  const signature = generateSignature(timeStamp, apiSecret);

  const formData = new FormData();

  formData.append("file", categoryForm.get("thumbnail"));
  formData.append("api_key", apiKey);
  formData.append("timestamp", timeStamp);
  formData.append("signature", signature);
  console.log("Form Data => ", formData);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: formData }
  );

  const data = await response.json();
  console.log("Data =>", data);
  if (response.ok) {
    console.log(data);
    return data.secure_url;
  } else {
    console.log("Error in uploading image =>", data.error.message);
    return data.error.message;
  }
}

function generateSignature(timeStamp, apiSecret) {
  const crypto = require("crypto");
  const signature = crypto
    .createHash("sha256")
    .update(`timestamp=${timeStamp}${apiSecret}`)
    .digest("hex");
  return signature;
}
