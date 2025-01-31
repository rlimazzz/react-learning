import style from './List.module.css'

type Fruit = {
    id : number,
    name : string,
    calories : number
}

function List() {
    let arrayOfFruits : Fruit[] = [
        {id : 1, name: "apple", calories: 52},
        {id : 2, name: "banana", calories: 89},
        {id : 3, name: "applepie", calories: 50},
        {id: 4, name: "blueberry", calories : 57},
    ]


    const listItems = arrayOfFruits.map(fruits => <div className={style.fruit}>
                                                    <h1 className={style.header}>{fruits.id}-{fruits.name}</h1>
                                                    <p className={style.text}>Has {fruits.calories} calories per 100 grams</p>
                                                  </div>
    )

    return(
        <ul>{listItems}</ul>
    );
}

export default List