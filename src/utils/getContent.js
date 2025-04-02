export async function getContent() {
	const apiSecret = import.meta.env.STRAPI_API_SECRET
	const websiteId = import.meta.env.WEBSITE_ID
	const strapiUrl = import.meta.env.STRAPI_URL

	const url = `${strapiUrl}/websites/${websiteId}?populate=*`
	
	try {
		const response = await fetch(url, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${apiSecret}`,
				},
				mode: "cors",
			},
		)

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		const data = await response.json()
		return data
	} catch (error) {
		console.error("Could not connect to the api:", error.message)
		throw error
	}
}