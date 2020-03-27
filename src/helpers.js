import { names, planets } from './droids';

export const newDroid = () => {
	const droid = {};

	droid.name = getName();
	droid.height = getHeight();
	droid.mass = getMass();
	droid.homeworld = getHomeworld();

	return droid;
}

const getName = () => {
	return names[Math.floor(Math.random() * 28)];
 }

const getHeight = () => {
	return Math.floor(Math.random() * (200 - 50 + 1) +50);
}

const getMass = () => {
	return Math.floor(Math.random() * (150 - 25 + 1) + 25);
}

const getHomeworld = () => {
	return planets[Math.floor(Math.random() * 31)];
}

export const addingIndexKey = (droids) => {
  for (let i = 0; i < droids.length; i++) {
    droids[i].id = i + 1;
  }

  return droids;
}
