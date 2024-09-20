import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './category.module.css';

// function CategoryCard({ data }) {
//   console.log(data);
//   if (!data) {
//     return <div className={classes.category}>No data available</div>;
//   }

//   return (
//     <div className={classes.category}>
//       <Link to={`/category/${data.name}`}>
//         <span>
//           <h2>{data.title}</h2>
//         </span>
//         <img src={data.imglink} alt={data.title || 'Category Image'} />
//         <p>Shop now</p>
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard;


function CategoryCard({ data }) { // Accepts data as a prop
        // console.log(data)
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2> 
        </span>
        <img src={data?.imglink} alt="" /> 
        <p>Shop now</p> 
      </Link>
    </div>
  );
}

export default CategoryCard;