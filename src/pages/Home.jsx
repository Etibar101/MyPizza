import React from 'react';
import { Categories, SortPopup } from '../components';
import PizzaBlock from "../components/PizzaBlocks";

function Home({items}) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавит', type: 'alphabet' },
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
            items.map((pizzas) => <PizzaBlock key={pizzas.id} {...pizzas}/> )
        }
      </div>
    </div>
  );
}

export default Home;