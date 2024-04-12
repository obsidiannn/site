const navigation = [
  { name: '特征', href: '#' },
  { name: '生态系统', href: '#' },
  { name: '组织', href: '#' },
  { name: '帮助', href: '#' },
  { name: '合作', href: '#' },
  { name: '开发商', href: '#' },
  { name: 'SNT', href: '#' },
]
export default function Top() {
  return <div className="flex-1 pos-relative bg-gray-800 w-full flex-1"
    style={{
      // backgroundImage: 'url("./src/assets/images/bg.png")',
      // backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed',
      // zIndex: '1',
      // opacity: '0.99'
    }} >
    {/* <img src="./src/assets/images/bg.png" className="pos-absolute w-full" /> */}
    <div className="flex inset-x-0 top-0 z-50 bg-gray-800 border-b-style-solid -border--1 border-b-gray-500">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden ml-20 lg:flex lg:gap-x-12 ">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm leading-6 text-gray-300">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="flex-self-center ml-auto mr-10">
        <button className='border-rd-8 bg-gray-800 -border--1 border-gray-500 text-gray-300'>注册抢先体验</button>
      </div>
    </div>

    <div className="flex flex-col mx-auto max-w-2xl pt-8 pb-8 flex-items-center ">
      <div className="mt-10 text-center">
        <h1 className="text-4xl tracking-tight text-gray-100 sm:text-5xl">
          跳转到Web3
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-3xl">
          使用开源、去中心化的加密通信超级应用程序
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="border-rd-8 bg-blue-600 px-5.5 py-3.5 text-1xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            注册抢先体验
          </a>
        </div>
        <div className="mt-1 flex items-center justify-center gap-x-6">
          <p className=" text-white text-4 leading-8 w-80 text-center ">
            适用于 Mac、Windows、Linux 的 Beta 版本适用于 iOS 和 Android 的 Alpha 版本
          </p>
        </div>
      </div>
      <div className="mt--24">
        <img src="./src/assets/icon-fonts/head.svg" className='' />
      </div>
    </div>
    <img src="./src/assets/icon-fonts/coins.svg" alt="" className='pos-absolute w-50 h-50 pos-left-0 pos-top-100' />
    <img src="./src/assets/icon-fonts/right-hand.svg" alt="" className='pos-absolute w-50 h-50 pos-right-0 pos-top-100' />

  </div>
}