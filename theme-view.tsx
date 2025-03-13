import { useLoaderData } from "react-router";

const ThemeView = () => {
  const data = useLoaderData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default ThemeView;
