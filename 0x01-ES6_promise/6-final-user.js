import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const promises = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return promises.map((data) => ({
    status: data.status,
    value: data.status === 'fulfilled' ? data.value : String(data.reason),
  }));
}
