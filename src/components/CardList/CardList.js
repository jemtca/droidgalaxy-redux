import React from 'react';
import Card from '../Card/Card';

const CardList = ({ droids }) => {
	return (
		<div>
			{
				droids.map(droid => {
					return (
						<Card
							key={droid.id}
							id={droid.id}
							name={droid.name}
							height={droid.height}
							mass={droid.mass}
							homeworld={droid.homeworld} 
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
