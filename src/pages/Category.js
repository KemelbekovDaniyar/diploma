import { useMatch } from "react-router";

export default function Category(props) {
  const params = useMatch("/categories/:slug");


  const categories = [
    { name: "All", id: "all", slug: "in-containers" },
    { name: "Guitars", id: "guitars", slug: "in-cones" },
    { name: "Basses", id: "basses", slug: "classic" },
    { name: "Drums", id: "drums", slug: "in-bags" },
    { name: "Keyboards", id: "keyboards", slug: "in-bags" },
  ];

  return (
    <div className="Category">
      <h1>Category</h1>
    </div>
  );
}