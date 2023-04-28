import { useState } from "react"
import './AddCategoryJs.css'
import { addDoc } from "firebase/firestore/lite"
import { categoryCollection } from "../../firebase"

export default function AddCategoryJs() {
  const [category, setCategory] = useState('')

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }

  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {
      alert('Category name must be longer than 5 characters')
      return
    }

    addDoc(categoryCollection, {
      name: name,
      slug: name
        .replace(" ", '-')
        .toLowerCase(),
    }).then(() => {
      setCategory('')
    })
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