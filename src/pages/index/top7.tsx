
import { ChevronRightIcon, WalletIcon } from '@heroicons/react/24/outline'

export default function () {
  return <div className="flex flex-col w-full bg-gray-800 ">
    <div className="flex flex-items-center p35 bg-white v-100%" style={{ borderBottomLeftRadius: '56px', borderBottomRightRadius: '56px' }}  >
      <div className='flex flex-col flex-items-center p-5 b-rounded-14 b-gray-2 b-solid b-1'>
        <img src="./src/assets/images/top6_1.png" alt="" className='w-80'/>
        <span className='text-4 mt-2'>全链 dApp 连接。所以你不必选择链条。</span>
      </div>
      <div className='flex flex-col p-10 bg-gra'>
        <div className='flex flex-col border-b-solid b-gray-2 p-10 b-1'>
          <span className='mb-2 text-6'>探索 dApp</span>
          <span className='text-#6C727F text-4'>就像操作系统一样，无论您最近在做什么，只需轻按几下即可。从与朋友聊天转到帐户，无需返回</span>
        </div>
        <div className='flex flex-col border-b-solid b-gray-2 p-10 b-1'>
          <span className='mb-2 text-6'>跟踪您的通知</span>
          <span className='text-#6C727F text-4'>通过社区、一对一聊天、钱包账户和 dApp，可以发生很多事情！通过全球通知中心保持控制，让您一目了然地看到 web3 世界中发生的一切。</span>
        </div>
        <div className='flex flex-col border-b-solid b-gray-2 p-10 b-1'>
          <span className='mb-2 text-6'>让它成为你自己的</span>
          <span className='text-#6C727F text-4'>自定义您的状态！选择一个头像和颜色来代表你自己，选择浅色或深色模式，选择表情符号来代表你的帐户，然后看看应用程序将呈现你加入的社区的特征。</span>
        </div>
        <div className='flex flex-col  p-10'>
          <span className='mb-2 text-6'>使用多个配置文件</span>
          <span className='text-#6C727F text-4'>不同的在线身份？或者与家人或朋友共享设备？没问题，Status 完全支持在多个完全独立的身份之间切换。</span>
        </div>
      </div>
    </div>
  </div>
}