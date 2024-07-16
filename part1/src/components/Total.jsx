const Total = (props) => {
  const totalExercises = props.exercises.reduce((sum, part) => sum + part, 0)
    return (
      <div>
        <p>Number of exercises {totalExercises}</p>
      </div>
    )
  }

export {Total}