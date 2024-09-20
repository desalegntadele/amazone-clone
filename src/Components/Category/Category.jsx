import React from 'react'
import { categoryInfo } from './categoryInfos'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
function Category() {
  return (
    <section className={classes.category_container}>
    {
        categoryInfo.map((info)=>(
        <CategoryCard  data={info}/>
        // key={info.name}
        ))
    }
    </section>
  )
}

export default Category;
