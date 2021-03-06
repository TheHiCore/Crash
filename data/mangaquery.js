module.exports = `
query ($id: Int, $page: Int, $perPage: Int, $search: String, $genre: String) {
	Page (page: $page, perPage: $perPage) {
		pageInfo {
		total
		currentPage
		lastPage
		hasNextPage
		perPage
		}
	media (id: $id, search: $search, genre: $genre, type: MANGA) {
		id
		tags {
			name
		}
		siteUrl
		format
		title {
			romaji
			english
		}
		coverImage {
			large
		}
		bannerImage
		status
		description
		averageScore
		startDate {
			day
			month
			year
		}
		endDate {
			day
			month
			year
		}
		chapters
		volumes
		countryOfOrigin
		isLicensed
		source
		genres
		meanScore
		popularity
		isAdult
		characters(page: $page, role: MAIN) {
		nodes {
		id
		name {
			first
			last
		}
		siteUrl
		}
		}
		staff(page: $page) {
		edges {
			node {
				id
				name {
					first
					last
				}
				siteUrl
			}
			role
		}
	}
	}
	}
}`