import { Part } from "./Part"

const Content = (props) => {
    const parts = props.parts
    return (
        <div>
            {parts.map((el, index) => (
                <Part key={index} name={el.name} exercises={el.exercises} />)
            )}
        </div>
    )
}

export { Content }