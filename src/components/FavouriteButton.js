import React, { useEffect, useState } from 'react'
import './FavouriteButton.scss'

const FavouriteButton = ({ repo }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const favourites = JSON.parse(localStorage.getItem('favouriteRepos') || '[]')
		const isRepoFavorite = favourites.some(favRepo => favRepo.id === repo.id)
		setIsFavorite(isRepoFavorite)
	}, [repo.id])

	const handleToggleFavorite = () => {
		const favourites = JSON.parse(localStorage.getItem('favouriteRepos') || '[]')
		let updatedFavorites

		if (isFavorite) {
			updatedFavorites = favourites.filter(favRepo => favRepo.id !== repo.id)
		} else {
			updatedFavorites = [
				...favourites,
				{
					id: repo.id,
					name: repo.name,
					owner: repo.owner.login,
					awatar: repo.owner.avatar_url,
					url: repo.owner.html_url,
					stars: repo.stargazers_count,
					date: repo.created_at,
				},
			]
		}

		localStorage.setItem('favouriteRepos', JSON.stringify(updatedFavorites))
		setIsFavorite(!isFavorite)
	}

	return (
		<button onClick={handleToggleFavorite} data-repo-id={repo.id}>
			{isFavorite ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}
		</button>
	)
}

export default FavouriteButton
