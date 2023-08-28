function fetchData1() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(`There was an error: ${error}`));
  }

  async function fetchData2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  }

  async function fetchData3() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(response)
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  }

  const fetchData4 = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`There was an error: ${error}`);
    }
  };
  fetchData1();
  fetchData2();
  fetchData3();
  fetchData4();