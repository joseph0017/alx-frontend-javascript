import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const errMessage = Error('Signup system offline');
  const userPhoto = uploadPhoto();
  const user = createUser();
  return Promise.all([userPhoto, user])
    .then((result) => {
      const photoResponse = result[0];
      const userResponse = result[1];
      console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => console.log(errMessage));
}

export default handleProfileSignup;
