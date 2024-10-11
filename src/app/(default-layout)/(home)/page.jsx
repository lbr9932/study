import "@/styles/pages/home.scss";
import SearchForm from "@/app/_components/SearchForm";
import InfinityMoveList from "./InfinityMoveList";

export default function Home() {
  return (
    <div className="wrap">
      <InfinityMoveList />
      <SearchForm />
    </div>
  );
}
