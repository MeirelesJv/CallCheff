import api from "./api"

export function postMail(mail: string, password: string) {
  api.post('users/create/email', {
    email: mail,
    password: password
  })
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  axios.post('http://localhost:8080/users/create', { email, password })
    .then(response => {
      console.log(response.data);
      setEmail(email);
      setPassword(password);
    })
    .catch(error => console.error('Error adding user:', error));
};