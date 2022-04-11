export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const formats = {
  DIVIDER: "MMMM Do, YYYY",
  MESSAGE: "M/D, h:mm A",
  MESSAGE_TOOLTIP: "MMMM D, YYYY h:mm A",
};
