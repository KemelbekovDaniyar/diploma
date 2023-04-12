import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Guitars", slug: "guitars" },
    { id: 2, name: "Audio & Recording", slug: "audio-recording" },
    { id: 3, name: "Accessories", slug: "accessories" },
    { id: 4, name: "Keyboards and pianos", slug: "keyboards-pianos" },
    { id: 5, name: "Orchestral Instruments", slug: "orchestral-instruments" },
    { id: 6, name: "Drums and percussion", slug: "drums-percussion" },
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