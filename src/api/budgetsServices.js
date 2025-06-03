import { getDocs, budgetsCollections, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const budgetsServices = {
  getBudgets: async function () {
    let budgets = [];
    const snapshot = await getDocs(budgetsCollections);
    snapshot.forEach((doc) => {
      budgets.push({ id: doc.id, ...doc.data() });
    });
    return budgets;
  },
  getBudget: async function (id) {
    const docRef = doc(db, "budgets", id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  },
  updateBudget: async function (data, id) {
    const budgetRef = doc(db, "budgets", id);
    setDoc(budgetRef, data);
  },
};

export default budgetsServices;
