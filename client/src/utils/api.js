export async function getFromBackend(){
    let result;
    const fetchSettings = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
            },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }

    await fetch('http://127.0.0.1:5000/api/test', fetchSettings)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      result = data;
  });

    return result
}