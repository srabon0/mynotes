const useCall = () => {
    // GET request example
    async function fetchData(url) {
      try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }
            );
        console.log("response is ", response);
        return response.json();
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
      }
    }
  
    // // POST request example
    // async function postData(url, data) {
    //   try {
    //     const response = await this.$http.$post(url, data);
    //     return response.data;
    //   } catch (error) {
    //     console.error(error);
    //     throw new Error('Failed to post data');
    //   }
    // }
  
    // Add more functions for different HTTP methods as needed

    
  
    return {
      fetchData,
    //   postData,
      // Add more functions here
    };
  }

export default useCall;