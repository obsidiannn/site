import { PlusCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
export default function () {
  return <div className="flex flex-justify-between bg-gray-800 pt-30 pb-30 ">
    <div className='flex'><img src='./src/assets/images/top3_1.png' className='w-100'></img></div>
    <div className="flex flex-col w-full flex-items-center mt-10">
      <button className="b-rounded-14 bg-#294AF5 text-white flex flex-items-center b-4 b-gray-200 flex-justify-center pl-10 pr-10">
        <PlusCircleIcon width={14} />
        创建社区
      </button>
      <span className="font-size-8 mt-4 text-white">
        收回控制权
      </span>
      <div className="mt-4 ">
        <span className="font-size-4 text-white">
          不要让 Discord 或 Telegram 对您的社区拥有控制权
        </span>
      </div>
      <div className="mt-4">
        <span className="font-size-3 text-gray-4 flex flex-self-center">
          让您的社区自由<ChevronRightIcon width={14} />
        </span>
      </div>
    </div>
    <div className='flex'><img src='./src/assets/images/top3_2.png' className='w-100'></img></div>
  </div>
}