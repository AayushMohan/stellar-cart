const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query } = await searchParams;
  return <div>Search results for: {query}</div>;
};
export default SearchPage;
