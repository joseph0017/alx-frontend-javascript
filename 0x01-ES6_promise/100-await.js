import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const userPhoto = await uploadPhoto();
    const userProfile = await createUser();
    return { photo: userPhoto, user: userProfile };
  } catch (error) {
    return { photo: null, user: null };
  }
}
