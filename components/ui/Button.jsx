
const Button = ({ children, style }) => {
    return (
        <div>
            <button className={`bg-skyBlue text-white outline-none ${style}`}>{children}</button>
        </div>
    );
}

export default Button;