import CategoryList from "../components/CategoryList/CategoryList";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="Home">
      <CategoryList />
      <Video />
    </div>
  );
}