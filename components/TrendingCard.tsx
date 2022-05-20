import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'
import Image from 'next/image'
import type { TrendingCardRowType } from './TrendingCardRow'

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
}

type TrendingCard = {
  title: string
  icon: string
  trendingData: TrendingCardRowType
}

const TrendingCard = ({ icon, title, trendingData }: any) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((item: any, index: number) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        )
      })}
    </div>
  )
}

export default TrendingCard
