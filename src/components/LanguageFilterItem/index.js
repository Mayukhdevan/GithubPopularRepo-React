import './index.css'

const LanguageFilterItem = props => {
  const {filterItem, isActive, changeFilter} = props
  const {id, language} = filterItem

  const onUpdate = () => changeFilter(id)

  const activeClass = isActive ? 'active-filter' : ''

  return (
    <li className="filter-item">
      <button
        className={`filter-button ${activeClass}`}
        type="button"
        onClick={onUpdate}
        disabled={isActive}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
