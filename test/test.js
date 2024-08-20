var cnpj = '08582146000102';
const url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });