function handleResponseFromAPI(promise) {
  const dataObject = {
    status: 200,
    body: 'success',
  };
  const errMessage = Error();
  const successMessage = 'Got a response from the API';
  return new Promise((resolve, error) => {
    if (promise) {
      resolve(dataObject);
    } else {
      error(errMessage);
    }
  })
    .then(() => {
      console.log(successMessage);
    });
}

export default handleResponseFromAPI;
