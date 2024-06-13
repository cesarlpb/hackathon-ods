const getUsername = async () => {
  const username = localStorage.getItem('username');
  if (username) {
    console.log(`User existed ${username}`);
    return username;
  }

  const res = await fetch('https://random-data-api.com/api/users/random_user');

  const { username: randomUserName } = await res.json();
  localStorage.setItem('username', randomUserName);
  return randomUserName;
};

export default getUsername;
