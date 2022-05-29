import Image from 'next/image'

type CoinNameRowPRops = {
  name: string
  icon: string
}

const CoinNameRow = ({ name, icon }: CoinNameRowPRops) => {
  return (
    <div className="flex">
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  )
}

export default CoinNameRow
