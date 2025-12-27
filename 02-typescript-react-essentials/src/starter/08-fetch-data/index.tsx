import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

function Component(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tours, setTours] = useState<User[]>([]);

  useEffect((): void => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    const url: string = "https://www.course-api.com/react-tours-project";
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data: User[] = await response.json();
      console.log(data);
      setTours(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <div>loading....</div>
  ) : (
    <>
      {tours.map((e, i) => (
        <div key={i}>{e.name}</div>
      ))}
    </>
  );
}
export default Component;
