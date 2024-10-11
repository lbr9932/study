import SearchForm from "@/app/_components/SearchForm";
import List from "@/app/(default-layout)/movie/List";

export default async function Page({ searchParams }) {
  const search = searchParams.search;

  return (
    <div className="wrap">
      <SearchForm value={search} />
      <List search={search} />
    </div>
  );
}
