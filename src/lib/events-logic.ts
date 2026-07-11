import eventsData from "@/data/events.json";

const now = new Date();
const currentYear = now.getFullYear();
const currentMonthIndex = now.getMonth();

const monthsToShow = [0, 1, 2].map((offset) => {
  const monthIndex = (currentMonthIndex + offset) % 12;
  const year = currentMonthIndex + offset >= 12 ? currentYear + 1 : currentYear;

  const events = eventsData.monthlyFlagships
    .filter((f) => f.month === monthIndex)
    .sort((a, b) => a.day - b.day);

  return {
    monthIndex,
    year,
    monthName: new Date(year, monthIndex).toLocaleString("default", {
      month: "long",
    }),
    events,
  };
});

export { monthsToShow };
