export const getDayFormat = (date = new Date()): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

export const sampleMethod = (a: number, b: number): number => {
  return a + b;
};
