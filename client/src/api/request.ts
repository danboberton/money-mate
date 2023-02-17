export async function fetchPOST<TResponse>(url: string, body: RequestInit): Promise<TResponse>{

    console.log("fetching");
    return await fetch(url, body)
            .then((response) => {
                console.log("response is: " + response);
                return response.json();
                })
            .then((data) => data as TResponse);
}