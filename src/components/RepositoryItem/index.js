import './index.css'

const RepositoryItem = props => {
  const {repoItem} = props
  const {name, id, issuesCount, forksCount, starsCount, avatarUrl} = repoItem

  return (
    <li className="repo-item">
      <img className="avatar-img" src={avatarUrl} alt={name} />
      <h1 className="repo-name">{name}</h1>
      <div className="repo-stats-container">
        <p className="stats-text">
          <span>
            <img
              className="stats-icons"
              src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
              alt="stars"
            />
          </span>
          {starsCount} stars
        </p>
        <p className="stats-text">
          <span>
            <img
              className="stats-icons"
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
            />
          </span>
          {forksCount} forks
        </p>
        <p className="stats-text">
          <span>
            <img
              className="stats-icons"
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
            />
          </span>
          {issuesCount} open issues
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
