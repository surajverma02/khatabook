const formatDate = (currentDate) => {
  return `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;
};

module.exports = { formatDate }