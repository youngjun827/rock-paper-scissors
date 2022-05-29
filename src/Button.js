function Button({ children, onClick }) {
  return (
    <button class="App-reset" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
