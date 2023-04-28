import { useState } from "react"
import './AddCategoryJs.css'

export default function AddCategoryJs() {
  const [category, setCategory] = useState('')

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }

  function onAddCategory() {
    
  }



  return (
    <div className="AddCategoryJs">
      <input 
      type="text" 
      placeholder="Category name" 
      onChange={onChangeCategory} 
      value={category} />
      <button onClick={onAddCategory}>Add category</button>
    </div>
  )
}