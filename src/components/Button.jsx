function Button({ onClick, children }) {
  return (
    <button
      className="p-2 bg-green-400/70 rounded-lg cursor-pointer font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
