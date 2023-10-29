import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { RootState } from '../store/store'
import SearchInput from './SearchInput'
import UserAvatar from './UserAvatar'
import UserPopup from './UserPopup'
import Stopwatch from './Stopwatch'
import { AiOutlineMenu } from 'react-icons/ai'
import { onClose, setIsSidebarModalOpen } from '../store/slices/modalSlice'

const Navbar = () => {
  const user = useAppSelector((state: RootState) => state.auth.user)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch();


  return (
    <div className='py-2 md:py-5 px-3 md:px-8 bg-white border-b border-content/70 flex items-center h-16 fixed top-0 w-[100dvw] lg:w-[calc(100dvw-280px)] justify-between z-30'>
      <div>
        <button
          className='block lg:hidden'
          onClick={() => {
            dispatch(onClose());
            dispatch(setIsSidebarModalOpen(true))
          }}
        >
          <AiOutlineMenu size={24} className="text-primary" />
        </button>
      </div>
      <div className='ml-0 md:ml-3 xl:ml-[15%]'>
        <SearchInput />
      </div>
      <div className='flex items-center gap-2 md:gap-6'>
        <div className='hidden sm:block'>
          <Stopwatch />
        </div>
        <div className='relative'>
          <button onClick={() => setIsVisible(!isVisible)} className='focus:border-none'>
            <UserAvatar
              user={user}
            />
          </button>
          <UserPopup
            isVisible={isVisible}
            user={user}
            setIsVisible={setIsVisible}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
