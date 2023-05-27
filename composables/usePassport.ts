const usePassport = () => {

    const signUp = async ({username, password})=> {
        console.log("Calling from the usepassport")
        const url = 'http://localhost:5000/register'; // Replace with your login endpoint URL
      
        const requestBody = {
          username,
          password
        };
        console.log("requestBody",requestBody);
      
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        };
      
        return fetch(url, requestOptions)
          .then(response => {
            // if (!response.ok) {
            //   throw new Error('Sign up failed');
            // }
            console.log("sign up res",response);
            return response.json();
          })
          .then(data => {
            // Process the login response data
            return data;
          })
          .catch(error => {
            console.error(error);
            throw new Error('Sign up failed');
          });
      }
    
      const signIn = async ({username, password})=> {

        console.log("Calling from the usepassport")
        const url = 'http://localhost:5000/login'; // Replace with your login endpoint URL
      
        const requestBody = {
          username,
          password
        };
        console.log("requestBody",requestBody);
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        };
      
        return fetch(url, requestOptions)
          .then(response => {
            // if (!response.ok) {
            //   throw new Error('Login failed');
            // }
            console.log("Login res",response);
            localStorage.setItem('token', response.token);
            return response.json();
          })
          .then(data => {
            // Process the login response data
            return data;
          })
          .catch(error => {
            console.error(error);
            throw new Error('Login failed');
          });
      }
  return {
    signUp,
    signIn
  };
};

export default usePassport;