import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo])
    .then((results) => {
      const array = [];
      for (const item of results) {
        array.push({ status: item.status, value: item.value || item.reason });
      }
      return array;
    });
}

export default handleProfileSignup;
