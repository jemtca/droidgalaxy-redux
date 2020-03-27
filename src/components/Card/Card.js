import React from 'react';

const Card = ({ id, name, height, mass, homeworld }) => {
	return (
		<div className='bg-yellow dib br3 pa3 ma2 grow ba b--gold bw2 shadow-5 tc'>
			<img alt='droidImage' src={`https://robohash.org/${id}?size=200x200&&`} />
			<div>
				<p className='f3 b white ba b--black bg-black br4'>{name}</p>
				<div className='ba bw1 br2 b--black bg-gold pa3'>
					<span className='b'>{'Height: '}</span>
					<span>{height}</span>
					<p></p>
					{/*<p className='b'>{`Height: ${height}`}</p>*/}
					<span className='b'>{'Mass: '}</span>
					<span>{mass}</span>
					<p></p>
					{/*<p className='b'>{`Mass: ${mass}`}</p>*/}
					<span className='b'>{'Homeworld: '}</span>
					<span>{homeworld}</span>
					{/*<p className='b'>{`Homeworld: ${homeworld}`}</p>*/}
				</div>
			</div>
		</div>
	);
}

export default Card;
