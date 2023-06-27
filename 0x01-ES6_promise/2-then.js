function handleResponseFromAPI(promise) {
  const dataObject = {
    status: 200,
    body: 'success',
  };
  const errMessage = Error();
  const successMessage = 'Got a response from the API';
  return promise
    .then(() => dataObject)
    .catch(() => errMessage)
    .finally(() => console.log(successMessage));
}

export default handleResponseFromAPI;
