import { useRef, useEffect } from 'react';

export default function Modal({ title, onClose, onOk, children, showModal }) {

    const dialogRef = useRef(null)

    useEffect(() => {
        if (showModal) {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showModal])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    const dialog = showModal
        ? (
            <dialog ref={dialogRef} className="bg-silver-gradient fixed top-[15%] left-1/2 transform -translate-x-1/2 md:top-[15%] xl:top-1/4 z-40 p-1 rounded-2xl backdrop:bg-black/5 w-4/5 md:w-3/5 xl:w-2/5 max-w-full min-w-[300px] max-h-[80vh] overflow-y-auto no-scroll">
                <div className="flex flex-col bg-[#020024]/90 rounded-2xl overflow-y-auto max-h-full no-scroll">
                    
                    <div className="flex flex-row bg-silver-gradient justify-between items-center px-5 py-0.5">
                        
                        <h1 className="text-2xl lg:text-3xl red-gradient-text-left font-semibold">
                          {title}
                        </h1>
                        <button
                            onClick={closeDialog}
                            className="cursor-pointer bg-[#FF1E27] hover:bg-[#7D141D] active:text-black font-bold rounded-lg w-10 max-h-fit mb-0.5 text-white"
                        >X</button>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                        <div className="flex justify-end mt-8">
                            <button
                                onClick={clickOk}
                                className=" font-semibold py-0.5 px-2 rounded-2xl hover:underline text-[#FF1E27] "
                            >
                               <a href='https://api.zippopotam.us'> Know more</a>
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        ) : null


    return dialog
}