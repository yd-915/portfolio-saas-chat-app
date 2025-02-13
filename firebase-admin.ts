import admin from "firebase-admin";
import { initFirestore } from "@auth/firebase-adapter";

let app;

if (!admin.app.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "ganchat-dd078",
      clientEmail: "firebase-adminsdk-y14u0@ganchat-dd078.iam.gserviceaccount.com",
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const adminDB = initFirestore({
  credential: admin.credential.cert({
    projectId: "ganchat-dd078",
    clientEmail: "firebase-adminsdk-y14u0@ganchat-dd078.iam.gserviceaccount.com",
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});
 
const adminAuth = admin.auth(app);

export { adminDB, adminAuth };
