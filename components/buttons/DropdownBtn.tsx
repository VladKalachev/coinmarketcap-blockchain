import ChevronDown from '../../assets/svg/chevronDown'

const styles = {
  dropdownBtn: `flex items-center mr-2 rounded-md px-2 bg-blue-700 cursor-pointer`,
}

type DropdownBtnProps = {
  label: string
}

const DropdownBtn = ({ label }: DropdownBtnProps) => {
  return (
    <div className={styles.dropdownBtn}>
      <p className="mr-2">{label}</p>
      <ChevronDown fill={'#fff'} />
    </div>
  )
}

export default DropdownBtn
