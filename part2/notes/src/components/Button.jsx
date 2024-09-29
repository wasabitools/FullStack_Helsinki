const Button = ({ showAll, setShowAll }) => {
    const buttonText = showAll ? "important" : "all"
    return (
        <button onClick={() => setShowAll(!showAll)}>
            show {buttonText}
        </button>)
}

export { Button }