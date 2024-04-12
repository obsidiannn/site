
import { ChevronRightIcon, WalletIcon } from '@heroicons/react/24/outline'

export default function () {
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col p35 bg-white" >
      <div className='flex flex-justify-between'>
        <div className="flex flex-col ">
          <div>
            <button className="b-rounded-14 bg-#294AF5 text-white pl-5 pr-5 flex flex-items-center b-4 b-gray-200 flex-justify-center">
              <embed src="./src/assets/icon-fonts/browser.svg" className="mr-1" />
              浏览器
            </button>
          </div>
          <span className="font-size-6 mt-2">
            探索 dApp
          </span>
          <div className="mt-2 flex ">
            <span className="font-size-3 ">
              与 web3 dApp、DAO、NFT、DeFi 等进行可信交互。
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
          <img src='./src/assets/images/top6_1.png' className='w-80 h-140' />
        </div>
        <div >
          <img src='./src/assets/images/top6_2.png' className='w-80 mb-10' />
        </div>
        <div>
          <img src='./src/assets/images/top6_3.png' className='w-80' />
        </div>
      </div>
    </div>
  </div>
}