const now = new Date();
const startDate = new Date("2014-05-01");

const years = now.getFullYear() - startDate.getFullYear();
const months = now.getMonth() - startDate.getMonth();
const totalMonths = years * 12 + months;

export const durationSinceMay2014 = Math.floor(totalMonths / 12);
