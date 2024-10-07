import "@/styles/pages/home.scss";
import SearchForm from "@/app/components/SearchForm";
import InfinityMoveList from "@/app/(home)/_components/InfinityMoveList";

export default function Home() {
  return (
    <div className="wrap">
      <InfinityMoveList />
      <SearchForm />
    </div>
  );
}
