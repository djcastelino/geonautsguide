import cities from '../data/why-here.json' with { type: 'json' };
export const whyHereCities = cities;
export function findWhyHereCity(name = '') {
  const key = name.trim().toLocaleLowerCase('en');
  return cities.find(city => city.id === key || city.name.toLocaleLowerCase('en') === key || city.aliases?.some(alias => alias.toLocaleLowerCase('en') === key));
}
