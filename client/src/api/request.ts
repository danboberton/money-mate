export async function fetchPOST<TResponse>(url: string, body: RequestInit): Promise<TResponse>{

    return await fetch(url, body)
            .then((response) => response.json())
            .then((data) => data as TResponse)
}