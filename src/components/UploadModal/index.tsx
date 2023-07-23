import { useRecoilState } from "recoil"
import Modal from "react-modal"

import { modalState } from "@/atom/modalAtom";


const UploadModal = () => {

  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>Upload modal</h1>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={()=>setOpen(false)}
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] border-hidden translate-x-[-50%] bg-white rounded-md"
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  ) 
}

export default UploadModal;