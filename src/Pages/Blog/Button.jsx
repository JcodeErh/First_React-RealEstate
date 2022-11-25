




const Button = ({ className, type, onClick, children }) => {
    return (
      <button style={{fontFamily: 'Playfair Display'}} className={className} type={type} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  