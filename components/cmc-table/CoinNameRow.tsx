import Image from 'next/image'

type CoinNameRow = {
  name: string
  icon: string
}

const CoinNameRow = ({ name, icon }: CoinNameRow) => {
  return (
    <div className="flex">
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  )
}

export default CoinNameRow
