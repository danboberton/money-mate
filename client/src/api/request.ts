export function fetchPOST<TResponse>(url: string, body: RequestInit): Promise<TResponse>{

    return fetch(url, body)
            .then((response) => response.json())
            .then((data) => data as TResponse)
}