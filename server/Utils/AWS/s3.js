import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAYWH63KOGDJGJHMPW",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
