// Modal.tsx

import { ReactNode } from 'react'

interface ModalProps {
  children: ReactNode
  show: boolean
  homePageModal?: boolean
  onClose: () => void
}

export default function Modal({
  children,
  show,
  onClose,
  homePageModal = false
}: ModalProps) {
  return (
    <>
      {show && (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div
            className='fixed inset-0 w-full h-full bg-black/50'
            onClick={() => onClose()}
          ></div>

          <div className='flex items-center justify-center min-h-screen px-4'>
            <div
              className={
                homePageModal
                  ? 'relative w-full p-8 bg-white rounded-lg'
                  : 'relative w-full max-w-md p-8 bg-white rounded-lg'
              }
              onClick={(e) => e.stopPropagation()}
            >
              {children}
              {homePageModal && (
                <div
                  className='flex w-full  justify-end '
                  onClick={() => onClose()}
                >
                  <p className='hover:cursor-pointer px-4 border-2 rounded-md bg-black text-white'>
                    Close
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
