const formatDateAndTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12; // the hour '0' should be '12'
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();

  return {
    time: `${hours}:${minutes} ${ampm}`,
    date: `${day}, ${month} ${dayOfMonth}`,
  };
};

export default formatDateAndTime;
