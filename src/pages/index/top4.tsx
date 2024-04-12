
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function () {
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-col p35 bg-white v-100%" style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }} >
      <div className="flex flex-col w-full">
        <button className="b-rounded-14 bg-#294AF5 text-white w-30 flex flex-items-center b-4 b-gray-200 flex-justify-center">
          <embed src="./src/assets/icon-fonts/eat.svg" className="mr-1" />
          社区
        </button>
        <span className="font-size-6 mt-2">
          与朋友私聊
        </span>
        <div className="w-full mt-2 flex flex-justify-between ">
          <span className="font-size-3 ">
            通过去中心化消息传递、元数据隐私和端到端加密来保护您的言论自由权</span>
          <span className='font-size-3 hover:text-#294AF5 left-auto flex flex-items-center  '>
            了解更多
            <ChevronRightIcon width={14} />
          </span>
        </div>
      </div>
      <div className="flex flex-justify-around mt-10">
        <div className='flex p5 b-1 b-solid b-gray-300  b-rounded-10 '>
          <img src='./src/assets/images/top4_1.png' className='w-80 h-140' />
        </div>
        <div className='flex flex-col flex-justify-between'>
          <img src='./src/assets/images/top4_2a.png' className='w-80 mb-10' />
          <img src='./src/assets/images/top4_2b.png' className='w-80' />
        </div>
        <div>
          <img src='./src/assets/images/top4_3.png' className='w-80' />
        </div>
      </div>
    </div>
  </div>
}