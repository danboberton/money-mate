export async function getFromBackend(){
    const fetchSettings = {
        method: 'GET',
        mode: 'cors'
    //     , // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'omit', // include, *same-origin, omit, same-orogin
    // headers: {
    //   'Content-Type': 'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  }

    return await fetch('http://127.0.0.1:5000/api/test', fetchSettings)
        .then((response) => response.json())
}