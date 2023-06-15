import React from 'react'

import Home from './components/Home'
import Nav from './components/Nav'
import './components/Nav.scss'
import Favourite from './components/Favourite'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FavouriteDetails from './components/FavouriteDetails'
import ErrorPage from './components/ErrorPage'

const route = createBrowserRouter([
	{
		path: '/',
		element: <Nav />,
		errorElement: <ErrorPage />,

		children: [
			{ path: '/', element: <Home /> },
			{ path: '/favourites', element: <Favourite /> },
			{ path: '/favourites/:id', element: <FavouriteDetails /> },
		],
	},
])

function App() {
	return (
		<>
			<RouterProvider router={route} />
		</>
	)
}

export default App
