import React, { useState } from 'react'
import FavouriteButton from './FavouriteButton'
import Pagination from './Pagination'

import './Home.scss'

const Home = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [cachedSearches, setCachedSearches] = useState({})
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(10)

	const handleSearch = async () => {
		if (searchTerm === '') {
			setSearchResults([])
			return
		}

		if (cachedSearches[searchTerm]) {
			setSearchResults(cachedSearches[searchTerm])
		} else {
			try {
				let results = []

				if (localStorage.getItem(`searchResults_${searchTerm}`)) {
					results = JSON.parse(localStorage.getItem(`searchResults_${searchTerm}`))
				} else {
					const response = await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
					const data = await response.json()
					results = data.items || []

					localStorage.setItem(`searchResults_${searchTerm}`, JSON.stringify(results))
				}
				setSearchResults(results.map(repo => ({ ...repo, id: repo.id.toString() })))

				setCachedSearches(prevCache => ({ ...prevCache, [searchTerm]: results }))
				setSearchResults(results)
			} catch (error) {
				console.error('Błąd podczas pobierania danych:', error)
			}
		}

		setSearchTerm('')
		setCurrentPage(1)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prevPage => prevPage - 1)
		}
	}

	const handleNextPage = () => {
		const maxPage = Math.ceil(searchResults.length / itemsPerPage)
		if (currentPage < maxPage) {
			setCurrentPage(prevPage => prevPage + 1)
		}
	}

	const handleItemsPerPageChange = e => {
		const value = parseInt(e.target.value, 10)
		setItemsPerPage(value)
		setCurrentPage(1)
	}

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem)
	const maxPage = Math.ceil(searchResults.length / itemsPerPage)

	return (
		<div>
			<h1>Strona Główna</h1>
			<div className="search-controls">
				<input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
				<button className="search-button" onClick={handleSearch}>
					Szukaj
				</button>
			</div>

			{searchResults.length > 0 ? (
				<div>
					<span className="page-counter">{`Strona ${currentPage} z ${maxPage}`}</span>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Nazwa repozytorium</th>
								<th>Właściciel</th>
								<th>Ilość gwiazdek</th>
								<th>Data utworzenia</th>
								<th>Ulubione</th>
							</tr>
						</thead>
						<tbody>
							{currentItems.map(repo => (
								<tr key={repo.id}>
									<td>{repo.id}</td>
									<td>{repo.name}</td>
									<td>
										<img src={repo.owner.avatar_url} alt="Avatar" />
										{repo.owner.login}
									</td>
									<td>{repo.stargazers_count}</td>
									<td>{repo.created_at}</td>
									<td>
										<FavouriteButton repo={repo} />
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<Pagination
						currentPage={currentPage}
						totalPages={maxPage}
						onPreviousPage={handlePreviousPage}
						onNextPage={handleNextPage}
						itemsPerPage={itemsPerPage}
						onItemsPerPageChange={handleItemsPerPageChange}
					/>
				</div>
			) : (
				<p>Brak wyników wyszukiwania!</p>
			)}
		</div>
	)
}

export default Home
