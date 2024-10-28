const Button = ({ title, handleClick }) => {
    return (
        <div>
            <button onClick={handleClick} type="submit">{title}</button>
        </div >
    )
}

export { Button }