import './style.css';

const food = document.querySelector('.food');

const printMeals = async (link) => {
  const response = await fetch(link);
  await response.json()
    .then((json) => {
      console.log(json);
    });
};

printMeals('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');