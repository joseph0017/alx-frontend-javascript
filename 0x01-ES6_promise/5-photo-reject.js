function uploadPhoto(fileName) {
  const errMessage = Error(`${fileName} cannot be processed`);
  return Promise.reject(
    errMessage,
  );
}

export default uploadPhoto;
