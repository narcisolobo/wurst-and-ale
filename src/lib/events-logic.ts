import eventsData from "@/data/events.json";

const now = new Date();
const currentYear = now.getFullYear();
const currentMonthIndex = now.getMonth();

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getRecurringDatesInMonth(
  year: number,
  month: number,
  dayOfWeek: number,
) {
  const daysInMonth = getDaysInMonth(year, month);
  const dates = [];
  for (let day = 1; day <= daysInMonth; day++) {
    if (new Date(year, month, day).getDay() === dayOfWeek) {
      dates.push(day);
    }
  }
  return dates;
}

const monthsToShow = [0, 1, 2].map((offset) => {
  const monthIndex = (currentMonthIndex + offset) % 12;
  const year = currentMonthIndex + offset >= 12 ? currentYear + 1 : currentYear;

  const recurringDates = getRecurringDatesInMonth(
    year,
    monthIndex,
    eventsData.recurringEvent.dayOfWeek,
  ).map((day) => ({
    day,
    title: eventsData.recurringEvent.title,
    description: eventsData.recurringEvent.description,
  }));

  const flagship = eventsData.monthlyFlagships.find(
    (f) => f.month === monthIndex,
  );

  const allEvents = flagship
    ? [...recurringDates, flagship].sort((a, b) => a.day - b.day)
    : recurringDates;

  return {
    monthIndex,
    year,
    monthName: new Date(year, monthIndex).toLocaleString("default", {
      month: "long",
    }),
    events: allEvents,
  };
});

export { monthsToShow };
