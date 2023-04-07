import { useMatch } from "react-router";

export default function Category(props) {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { name: "Guitars", id: "guitars", slug: "in-cones" },
    { name: "Basses", id: "basses", slug: "classic" },
    { name: "Drums", id: "drums", slug: "in-bags" },
    { name: "Keyboards", id: "keyboards", slug: "in-bags" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}