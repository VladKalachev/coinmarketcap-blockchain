import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
  rateFilled: `bg-green-600 flex items-center px-3 ml-3 rounded-xl`,
}

// Component
const RateFilled = () => {
  return (
    <div className={styles.rateFilled}>
      <ChevronUp fill={'#fff'} />
      <small className="pl-1">23.32%</small>
    </div>
  )
}

export default RateFilled
