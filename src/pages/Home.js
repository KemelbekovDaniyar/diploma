
import Video from "../components/Video/Video";
import CategoryList from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <div className="Home">
      <CategoryList />
      <Video />
    </div>
  );
}