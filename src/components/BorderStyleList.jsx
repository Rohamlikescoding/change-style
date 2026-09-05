import { useObject } from "../contexts/ObjectContext";
import BorderWidth from "./BorderWidth";
import Button from "./Button";

function BorderStyleList() {
  const { style, setStyle } = useObject();

  return (
    <section className="flex flex-col gap-2">
      <BorderWidth />
      <section className="flex flex-col gap-3 bg-green-100 p-5 rounded-xl ">
        <p className="font-bold">Control Border Style</p>
        <Button onClick={() => setStyle({ ...style, borderStyle: "solid" })}>
          Solid
        </Button>
        <Button onClick={() => setStyle({ ...style, borderStyle: "dashed" })}>
          Dashed
        </Button>
        <Button onClick={() => setStyle({ ...style, borderStyle: "dotted" })}>
          Dotted
        </Button>
        <Button onClick={() => setStyle({ ...style, borderStyle: "double" })}>
          Double
        </Button>
        <Button onClick={() => setStyle({ ...style, borderStyle: "hidden" })}>
          Hidden
        </Button>
      </section>
    </section>
  );
}

export default BorderStyleList;
