const styles = {
  button: `bg-[#6188FF] px-5 py-2 rounded-lg`,
}

type Button = {
  label: string
  onPress: any
}

const Button = ({ label, onPress }: Button) => {
  return (
    <button className={styles.button} onClick={onPress}>
      {label}
    </button>
  )
}

export default Button
