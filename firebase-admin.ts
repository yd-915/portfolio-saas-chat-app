import admin from "firebase-admin";
import { initFirestore } from "@auth/firebase-adapter";

let app;

if (!admin.app.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "ganchat-dd078",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const adminDB = initFirestore({
  credential: admin.credential.cert({
    projectId: "ganchat-dd078",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});
 
const adminAuth = admin.auth(app);

export { adminDB, adminAuth };
