// ---------- FIREBASE INIT (shared across pages) ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw8H7nAicBcO94uSfn3Ac0MsTrmhkTt4o",
  authDomain: "fad3dbarber.firebaseapp.com",
  projectId: "fad3dbarber",
  storageBucket: "fad3dbarber.firebasestorage.app",
  messagingSenderId: "799129393328",
  appId: "1:799129393328:web:d4445932d4311738fb0375",
  measurementId: "G-9ZSDDNX58P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// ---------- CLOUDINARY (unsigned upload, same account used by ICE eFootballHub) ----------
const CLOUDINARY_CLOUD_NAME = "dol8nmjri";
const CLOUDINARY_UPLOAD_PRESET = "listing_pic";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// ---------- HTML ESCAPING (shared, use before putting any user-supplied
// string — names, review text, phone numbers, descriptions — into innerHTML) ----------
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));
}

// ---------- SOCIAL LINKS (shared across all pages, editable from Admin) ----------
// Reads settings/socials from Firestore and applies each URL to any element
// on the page with a matching data-social="<key>" attribute. Elements with
// no saved URL for their key are hidden rather than left as dead "#" links.
async function loadSocialLinks() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'socials'));
    const data = snap.exists() ? snap.data() : {};
    document.querySelectorAll('[data-social]').forEach((el) => {
      const key = el.getAttribute('data-social');
      const url = (data[key] || '').trim();
      if (url) {
        el.href = url;
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  } catch (err) {
    // Fail quietly on public pages — a social row just stays hidden.
    console.error('Could not load social links:', err);
  }
}

// ---------- CONTACT INFO (shared across all pages, editable from Admin) ----------
// Reads settings/contact from Firestore ({ address, hours, phone, email }) and
// applies it to any element with a matching data-contact="<key>" attribute.
// For phone/email, which are <a> tags, it also updates the tel:/mailto: href.
async function loadContactInfo() {
  try {
    const snap = await getDoc(doc(db, 'settings', 'contact'));
    if (!snap.exists()) return;
    const data = snap.data();
    document.querySelectorAll('[data-contact]').forEach((el) => {
      const key = el.getAttribute('data-contact');
      const value = (data[key] || '').trim();
      if (!value) return;
      el.textContent = value;
      if (key === 'email') el.href = `mailto:${value}`;
      if (key === 'phone') el.href = `tel:${value.replace(/[^0-9+]/g, '')}`;
    });
  } catch (err) {
    // Fail quietly on public pages — falls back to whatever's in the HTML.
    console.error('Could not load contact info:', err);
  }
}

async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(CLOUDINARY_URL, { method: "POST", body: formData });
  if (!response.ok) {
    throw new Error("Image upload failed. Check your Cloudinary preset/cloud name.");
  }
  const data = await response.json();
  return data.secure_url;
}

export {
  db,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp,
  uploadToCloudinary,
  loadSocialLinks,
  loadContactInfo,
  escapeHtml,
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
};
                    
