import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
export default function () {
  return <div className="flex flex-justify-between bg-gray-800 pt-30 pb-30 ">
    <div className='flex'><img src='./src/assets/images/top8_1.png' className='w-100'></img></div>
    <div className="flex flex-col w-full flex-items-center mt-10">
      
      <span className="font-size-8 mt-4 text-white">
        使用钥匙卡状态更好
      </span>
      <div className="mt-4 ">
        <span className="font-size-4 text-white">
        安全的非接触式硬件钱包
        </span>
      </div>
      <div className="mt-4">
        <button className="font-size-3 bg-gray-800 text-white b-rounded-14 b-gray-4 flex flex-self-center pl-5 pr-5">
          了解更多 <ChevronRightIcon width={14} />
        </button>
      </div>
    </div>
    <div className='flex bottom-1'><img src='./src/assets/images/top8_2.png' className='w-100'></img></div>
  </div>
}