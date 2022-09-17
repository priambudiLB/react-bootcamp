function Progress(props) {
    const progress = props.progress;
    return <div className="progress" style={{ width: '80%' }}>
        <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
    </div>
}

export default Progress;