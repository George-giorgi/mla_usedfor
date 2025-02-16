import admin from "firebase-admin";
import { getStorage } from "firebase-admin/storage";
import serviceAccount from "./firebase-service-account.json"; // Import service account JSON

// Initialize Firebase Admin SDK (Only once)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket: "my-mla-7bb5c.firebasestorage.app", // Replace with your Firebase Storage bucket
  });
}

const bucket = getStorage().bucket();

export { bucket };
