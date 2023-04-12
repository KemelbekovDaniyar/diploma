import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { name: "Guitars", id: "guitars", slug: "guitars" },
    { name: "Basses", id: "basses", slug: "basses" },
    { name: "Drums", id: "drums", slug: "drums" },
    { name: "Keyboards", id: "keyboards", slug: "keyboards" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}