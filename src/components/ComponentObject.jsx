import { useObject } from "../contexts/ObjectContext";

function ComponentObject() {
  const { style } = useObject();
  console.log(
    `border-${style.borderWidth} ${style.height} ${style.width} border-${style.borderStyle} ${style.color}`,
  );

  return (
    <div
      style={{ borderWidth: `${style.borderWidth}px` }}
      className={`${style.height} ${style.width} border-${style.borderStyle} ${style.color} ${style.borderColor} ${style.borderRedius}`}
    ></div>
  );
}

export default ComponentObject;
