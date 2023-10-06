import { categories } from '../../data'
import CategoryItem from '../categoriesItem/CategoryItem'
import './category.scss'
export default function Category() {
  return (
    <div className='category'>

        {
            categories.map((val)=>{
              return <CategoryItem
              key={val.id}
              item={val}
              />
            })
        }
    </div>
  )
}
