import { createContext, useContext, useState } from "react";

const ObjectContext = createContext(null);
function ObjectProvider({ children }) {
  const [style, setStyle] = useState({
    borderStyle: "hidden",
    width: "w-50",
    height: "h-50",
    color: "bg-green-400/70",
    borderWidth: 4,
    borderColor: "border-green-200",
    borderRedius: "rounded-xl",
  });

  return (
    <ObjectContext.Provider
      value={{
        style,
        setStyle,
      }}
    >
      {children}
    </ObjectContext.Provider>
  );
}
function useObject() {
  const context = useContext(ObjectContext);
  if (context === undefined)
    throw new Error("ObjectContext was used in a wrong place!");

  return context;
}

export { ObjectProvider, useObject };
