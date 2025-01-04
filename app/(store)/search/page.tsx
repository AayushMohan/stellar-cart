const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query } = await searchParams;
  // const products = await searchProductsByName(query);

  return <div>Search results for: {query}</div>;
};
export default SearchPage;
