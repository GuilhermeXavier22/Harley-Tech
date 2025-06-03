export const getDate = (timestamp) => {
  const date = new Date(timestamp?.seconds * 1000);
  return date.toLocaleDateString("pt-br");
};

export const getTotalValue = (items) => {
  if (!items) return 0;
  const total = items.reduce((sum, item) => {
    return sum + item.valor;
  }, 0);
  console.log(total, items, items.length);
  let totalInt = parseInt(total);
  if (totalInt === 0) {
    totalInt = 100;
    return totalInt * items.length;
  }
  return total;
};
