import { useParams } from "react-router-dom";

export default function Task() {
  const { id } = useParams();
  return (
    <>
      <p>HELLLO??</p>
      <h1>{id}</h1>
    </>
  );
}
