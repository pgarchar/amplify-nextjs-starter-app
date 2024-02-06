import { S3 } from 'aws-sdk';

// Replace these values with your S3 bucket details
const bucketName = 'gvwaitlist';
const region = 'us-east-1';
const accessKeyId = 'AKIA25TNZ25HENZVDMB2';
const secretAccessKey = 'GF/XyCd83jHHdaj1uZcwN3QvDFuab5ZQHSlrx9yQ';


const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

interface UploadParams {
  key: string;
  data: Record<string, any>;
}

export const uploadToS3= async ({ key, data }: UploadParams) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(data),
      ContentType: 'application/json',
    };

    await s3.upload(params).promise();

    console.log(`File uploaded successfully to S3: ${key}`);
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw error;
  }
};
