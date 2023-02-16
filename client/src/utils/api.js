export async function getFromBackend(){
    const fetchSettings = {
        method: 'GET',
        mode: 'cors'
  }

    return await fetch('http://127.0.0.1:5000/api/test', fetchSettings)
        .then((response) => response.json())
}

export async function getMonth(request){
    const fetchSettings = {
        method: 'POST',
        mode: 'cors',
        body: request,
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        }
    }

    return await fetch('http://127.0.0.1:5000/api/getMonth', fetchSettings)
        .then((response) => response.json())
}