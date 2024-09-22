import React from 'react'
import { CategoryInfo } from './CategoryInfos'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
function Category() {
  return (
    <section className={classes.category_container}>
    {
        CategoryInfo.map((info)=>(
        <CategoryCard  data={info}/>
        // key={info.name}
        ))
    }
    </section>
  )
}

export default Category;
