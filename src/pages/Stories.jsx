import Label from "../components/Label";
import Cards from "../components/UI/Cards";
import Animate from "../components/Animate";
import { useContext } from "react";
import { LoaderContext } from "../Store/data-context";

export default function Stories() {
  const isLoading = useContext(LoaderContext);

  return (
    <>
      <Label />
      <Cards />
      {!isLoading && <Animate className="card" />}
    </>
  );
}
