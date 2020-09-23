export const baseImage = process.env.BASE_IMAGE || 'https://steamcdn-a.akamaihd.net/';

var heroes = [];
export const setHeroesDf = (params) => {
  heroes = params;
};

export const getHeroes = () => heroes;
