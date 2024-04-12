
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function () {
  return <div className="flex flex-col  w-full bg-gray-800 ">
    <div className="flex flex-col p30 flex-items-center  bg-white v-100%" style={{ borderTopLeftRadius: '56px', borderTopRightRadius: '56px' }}>
      <div className='flex flex-items-center p10'>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>去中心化的未来</span>
          <span className='text-4 mb-3'>构建应用程序来维护人权、保护言论自由和保护隐私</span>
          <span className='text-3 mb-3 text-gray'>我的宣言 </span>
        </div>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>Status 的代币</span>
          <span className='text-4 mb-3'>参与 Status 的治理并帮助指导 SNT 的开发。</span>
          <span className='text-3 mb-3 text-gray'>关于BOBO </span>
        </div>
        <div className='flex flex-col p8 b-rounded-4 b-solid b-1 b-gray-3 mr-6 flex-items-center'>
          <span className='text-7 mb-3'>保持最新状态</span>
          <span className='text-4 mb-3'>在我们构建真正去中心化的超级应用程序时关注开发进度。</span>
          <span className='text-3 mb-3 text-gray'>阅读博客 </span>
        </div>
        <img src="./src/assets/icon-fonts/box.svg" className='pos-absolute pos-left-2xl ' />
      </div>

      <div className='flex flex-items-center p10'>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='font-600 text-8 mb-2'>联系我们</span>
          <span className='text-4'>Contact Us</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='font-500 text-5 mb-2'>欣千耀科技有限公司</span>
          <span className='text-4 mb-2'>公司地址： *************</span>
          <span className='text-4 mb-2'>邮箱:hezuo@xinqianyao.com</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='text-4 mb-2'>联系人：谭先生</span>
        </div>
        <div className='flex flex-col flex-items-center mr-14'>
          <span className='text-4 mb-2'>电话: 13113113131</span>
        </div>
      </div>
      <div className='flex flex-items-center p10 mt-30'>
        <span>xinqianyao Copyright 2013-2021 xinqianyao.com All rights reserved.欣千耀版权所有</span>
      </div>
    </div>
  </div>
}