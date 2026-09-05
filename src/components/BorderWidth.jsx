import { useObject } from "../contexts/ObjectContext";

function BorderWidth() {
  const { style, setStyle } = useObject();
  return (
    <section className="flex flex-col p-5 rounded-xl bg-green-100 gap-3">
      <p className="font-bold">Your Desired Width</p>
      <input
        className=" bg-green-400/70 p-2 rounded-xl  font-semibold text-center"
        type="number"
        min={0}
        max={100}
        defaultValue={style.borderWidth}
        onChange={(e) => setStyle({ ...style, borderWidth: e.target.value })}
      ></input>
    </section>
  );
}

export default BorderWidth;
