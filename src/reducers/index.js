import type { Restaurant } from '../types/restaurants';
const restaurants = (
  state: Array<Restaurant> = [
    {
      src: 'https://i.postimg.cc/0yLc9Wff/sushi.png',
      title: 'Sushi 1',
    },
    {
      src: 'https://i.postimg.cc/0yLc9Wff/sushi.png',
      title: 'Sushi 2',
    },
    {
      src: 'https://i.postimg.cc/0yLc9Wff/sushi.png',
      title: 'Sushi 3',
    },
    {
      src: 'https://i.postimg.cc/0yLc9Wff/sushi.png',
      title: 'Sushi 4',
    },
    {
      src: 'https://i.postimg.cc/0yLc9Wff/sushi.png',
      title: 'Sushi 5',
    },
  ],
  action: { type: string }
) => {
  switch (action.type) {
    case 'GET_RESTAURANTS':
      console.log('in correct case ', state);
      return state;
    default:
      return state;
  }
};
export default restaurants;
