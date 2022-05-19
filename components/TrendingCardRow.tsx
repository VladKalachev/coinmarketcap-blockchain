import Rate from './cmc-table/Rate'
import Image from 'next/image'

const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

export type TrendingCardRowType = {
  number: number
  symbol: string
  name: string
  icon: string
  isIncrement: boolean
  rate: string
}

const TrendingCardRow = ({
  number,
  icon,
  name,
  symbol,
  isIncrement,
  rate,
}: TrendingCardRowType) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="flex w-full">
        <div className="mx-5">
          {icon && <Image alt="" src={icon} width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400"> {symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  )
}

export default TrendingCardRow
