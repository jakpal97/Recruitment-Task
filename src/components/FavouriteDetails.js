import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './FavouriteDetails.scss'

const FavouriteDetails = () => {
	const { id } = useParams()
	const [repoData, setRepoData] = useState(null)

	useEffect(() => {
		const favourites = JSON.parse(localStorage.getItem('favouriteRepos') || '[]')
		const repoDetails = favourites.find(repo => repo.id.toString() === id.toString())

		if (repoDetails) {
			setRepoData(repoDetails)
		}
	}, [id])

	const handleRemoveFromFavorites = () => {
		const updatedFavorites = JSON.parse(localStorage.getItem('favouriteRepos') || '[]').filter(
			repo => repo.id.toString() !== id.toString()
		)
		localStorage.setItem('favouriteRepos', JSON.stringify(updatedFavorites))
		setRepoData(null)
	}

	return (
		<div className="details">
			<h2>Szczegóły ulubionego repozytorium</h2>
			{repoData ? (
				<div>
					<h3>
						{repoData.name} by {repoData.owner}
						<img alt='Awatar' src={repoData.awatar}></img>{' '}
					</h3>
					<a href={repoData.url} target="_blank" rel="noopener noreferrer">URL</a>

					<p>Ilość gwiazdek: {repoData.stars}</p>
					<p>Data utworzenia: {repoData.date}</p>
					<button onClick={handleRemoveFromFavorites}>Usuń z ulubionych</button>
				</div>
			) : (
				<p>Repozytorium nie istnieje.</p>
			)}
		</div>
	)
}

export default FavouriteDetails
