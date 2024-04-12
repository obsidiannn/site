
import { ChevronRightIcon, WalletIcon } from '@heroicons/react/24/outline'

export default function () {
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col p35 bg-white" >
      <div className='flex flex-justify-between'>
        <div className="flex flex-col ">
          <button className="b-rounded-14 bg-#294AF5 text-white w-30 flex flex-items-center b-4 b-gray-200 flex-justify-center">
            <WalletIcon width={18} className='mr-2' />
            钱包
          </button>
          <span className="font-size-6 mt-2">
            未来是多链的
          </span>
          <div className="mt-2 flex ">
            <span className="font-size-3 ">
              L2 变得简单 - 在多个网络上轻松、安全地发送和管理您的加密货币。
            </span>
          </div>
        </div>
        <div className='flex' >
          <span className='font-size-3 hover:text-#294AF5 flex flex-items-center self-end'>
            了解更多
            <ChevronRightIcon width={14} />
          </span>
        </div>
      </div>

      <div className="flex flex-justify-between mt-10">
        <div >
          <img src='./src/assets/images/top5_1.png' className='w-80 h-140' />
        </div>
        <div className='flex flex-col flex-justify-between'>
          <img src='./src/assets/images/top5_2a.png' className='w-80 mb-10' />
          <img src='./src/assets/images/top5_2b.png' className='w-80' />
        </div>
        <div>
          <img src='./src/assets/images/top5_3.png' className='w-80' />
        </div>
      </div>
    </div>
  </div>
}