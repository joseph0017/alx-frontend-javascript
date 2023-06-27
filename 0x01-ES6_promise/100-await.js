import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userPhoto = await uploadPhoto();
  const userProfile = await createUser();

  try {
    return { photo: userPhoto, user: userProfile };
  } catch (error) {
    return { photo: null, user: null };
  }
}
