import React from 'react'
import './Pagination.scss'

const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage, itemsPerPage, onItemsPerPageChange }) => {
	return (
		<div className="pagination">

			<div className="items-per-page">
				<label>Ilość elementów na stronie:</label>
				<select value={itemsPerPage} onChange={onItemsPerPageChange}>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={15}>15</option>
					<option value={30}>30</option>
				</select>
			</div>
			<button className='button-pag' onClick={onPreviousPage} disabled={currentPage === 1}>
				Poprzedni
			</button>

			<button className='button-pag' onClick={onNextPage} disabled={currentPage === totalPages}>
				Następny
			</button>
		</div>
	)
}

export default Pagination
