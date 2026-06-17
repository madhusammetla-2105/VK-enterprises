/* ===== Firestore Product Seeding Utility ===== */

import { db, isFirebaseConfigured } from '../firebase.js';
import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';

/**
 * Seed Firestore products collection with a custom list.
 * Clears the existing products in Firestore first to avoid duplicates.
 * @param {Array} productsList - Array of product objects
 * @returns {Promise<string>} Result message
 */
export async function seedProducts(productsList) {
  if (!isFirebaseConfigured) {
    const errorMsg = "Firebase config is not set. Please update src/firebase.js with your keys first.";
    console.error(errorMsg);
    return errorMsg;
  }

  if (!productsList || !Array.isArray(productsList) || productsList.length === 0) {
    const errorMsg = "Invalid products list. Must be a non-empty array of products.";
    console.error(errorMsg);
    return errorMsg;
  }

  console.log(`Starting database migration/seeding of ${productsList.length} products...`);
  const colRef = collection(db, 'products');

  try {
    // 1. Clear existing database documents in products
    const snapshot = await getDocs(colRef);
    console.log(`Clearing ${snapshot.size} existing products from Cloud Firestore...`);
    const deletePromises = [];
    snapshot.forEach(docSnap => {
      deletePromises.push(deleteDoc(doc(db, 'products', docSnap.id)));
    });
    await Promise.all(deletePromises);
    console.log("Database products collection cleared.");

    // 2. Upload new products in parallel
    const uploadPromises = [];
    productsList.forEach(product => {
      const id = product.id || product.sku || 'prod-' + Math.random().toString(36).substring(2, 9);
      const payload = {
        name: product.name || 'Unnamed Product',
        category: product.category || 'general',
        sku: product.sku || id,
        description: product.description || '',
        price: parseFloat(product.price) || 0,
        stockStatus: product.stockStatus || 'in_stock',
        imageUrl: product.imageUrl || '',
        specs: product.specs || null
      };

      const docRef = doc(db, 'products', id);
      uploadPromises.push(setDoc(docRef, payload));
    });

    await Promise.all(uploadPromises);
    const successMsg = `Successfully seeded ${productsList.length} products to Cloud Firestore!`;
    console.log(successMsg);
    return successMsg;
  } catch (error) {
    console.error("Firestore database seeding failed:", error);
    throw error;
  }
}
