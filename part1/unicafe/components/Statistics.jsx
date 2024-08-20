const StatisticsLine = ({ text, value }) => {
    return <tr>
        <td>{text}:</td>
        <td>{value}</td>
    </tr>
}

const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = total !== 0 ? (good + bad / total) : 0
    const positives = total !== 0 ? (good / total) * 100 : 0
    return <table>
        <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="Total" value={total} />
            <StatisticsLine text="Average" value={average.toFixed(2)} />
            <StatisticsLine text="Positives" value={`${positives.toFixed(2)}%`} />
        </tbody>
    </table>
}

export { StatisticsLine, Statistics }