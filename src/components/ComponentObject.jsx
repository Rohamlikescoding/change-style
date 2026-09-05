import { useObject } from "../contexts/ObjectContext";

function ComponentObject() {
  const { style } = useObject();
  console.log(
    `border-${style.borderWidth} ${style.height} ${style.width} border-${style.borderStyle} ${style.color}`,
  );
  const borderStyleMap = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    hidden: "border-hidden",
  };

  return (
    <div
      style={{ borderWidth: `${style.borderWidth}px` }}
      className={`${style.height} ${style.width} ${borderStyleMap[style.borderStyle]} ${style.color} ${style.borderColor} ${style.borderRedius}`}
    ></div>
  );
}

export default ComponentObject;
