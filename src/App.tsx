import './App.css'
import ContentOne from './pages/index/top1'
import ContentTwo from './pages/index/top2'
import ContentThree from './pages/index/top3'
import ContentFour from './pages/index/top4'
import ContentFive from './pages/index/top5'
import ContentSix from './pages/index/top6'
import ContentSeven from './pages/index/top7'
import ContentEight from './pages/index/top8'
import ContentNine from './pages/index/top9'
export default function Example() {
  return (
    <div className='flex flex-col w-full'>
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
      <ContentSix />
      <ContentSeven/>
      <ContentEight/>
      <ContentNine/>
    </div>
  )
}
