import "./CategoryList.css";

export default function CategoryList(props) {
  const categories = [
    { name: "All", id: "all" },
    { name: "Guitars", id: "guitars" },
    { name: "Basses", id: "basses" },
    { name: "Drums", id: "drums" },
    { name: "Keyboards", id: "keyboards" },
  ]

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
    </div>
  );
}