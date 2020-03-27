import React from 'react';

const SearchBox = ({ onSearchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba bw2 b--gold bg-yellow'
				type='search' 
				placeholder='search droids'
				onChange={onSearchChange}
			/>
		</div>
	);
}

export default SearchBox;
