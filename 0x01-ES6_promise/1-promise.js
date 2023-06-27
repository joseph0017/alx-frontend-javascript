function getFullResponseFromAPI(success) {
  const dataObject = {
    status: 200,
    body: 'Success',
  };
  const errMessage = Error('The fake API is not working currently');
  return new Promise((resolve, error) => {
    if (success) {
      resolve(dataObject);
    } else {
      error(errMessage);
    }
  });
}

export default getFullResponseFromAPI;
