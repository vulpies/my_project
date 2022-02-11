import localStorageService from "../services/localStorage.service"

export const useHttp = () => {
    const request = async (
        url,
        method = "GET",
        body = null,
        headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorageService.getAccessToken()}`,
        }
    ) => {
        try {
            console.log(url, "url")
            const response = await fetch(url, {
                method,
                body,
                headers,
            })

            if (!response.ok) {
                throw new Error(
                    `Could not fetch ${url}, status: ${response.status}`
                )
            }

            const data = await response.json()

            return data
        } catch (e) {
            throw e
        }
    }

    return { request }
}
