const getData = async (url, header) => {
  const response = await fetch(url, header)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return response.json("Error:", error);
    });
  return response;
};

const postData = async (url, header, body) => {
  const response = await fetch(url, header)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return response.json("Error:", error);
    });
  return response;
};

module.exports = { getData, postData };
