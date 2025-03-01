import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URL || "mongodb://localhost:27017/ecomm",
    JWT_SECRET: process.env.JWT_SECRET || "mysecret",
    JWT_EXPIRY: process.env.JWT_EXPIRY || "30d",
    COOKIE_SIGN: process.env.COOKIE_SIGN || "mysecret",
    NODE_ENV: process.env.NODE_ENV || "DEV",
    ALLOWED_ORIGINS: [],
    DOMAIN: process.env.DOMAIN || "localhost",
    // S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    // S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    // S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    // S3_REGION: process.env.S3_REGION,
    // SMTP_MAIL_HOST: process.env.SMTP_MAIL_HOST,
    // SMTP_MAIL_PORT: process.env.SMTP_MAIL_PORT,
    // SMTP_MAIL_USERNAME: process.env.SMTP_MAIL_USERNAME,
    // SMTP_MAIL_PASSWORD: process.env.SMTP_MAIL_PASSWORD,
    // SMTP_SENDER_EMAIL: process.env.SMTP_SENDER_EMAIL,
    // RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    // RAZORPAY_SECRET: process.env.RAZORPAY_SECRET,
};

export default config;