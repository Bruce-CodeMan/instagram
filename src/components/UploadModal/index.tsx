import { useRecoilState } from "recoil"
import Modal from "react-modal"
import { useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/24/outline";

// Custom Imports
import { modalState } from "@/atom/modalAtom";


const UploadModal = () => {

  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef= useRef<HTMLInputElement | null>(null)
  const captionRef = useRef<HTMLInputElement | null>(null)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const addImageToPost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.target.files?.[0]
    if(file){
      reader.readAsDataURL(file);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result as string);
    }
  }

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={()=>{
            setOpen(false)
            setSelectedFile(null)
          }}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white rounded-md"
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {
              selectedFile ? (
                <img 
                  onClick={() => setSelectedFile(null)}
                  src={selectedFile}
                  className="w-full max-h-[250px] object-cover cursor-pointer"
                />
              ): (
                <CameraIcon 
                  className="h-14 cursor-pointer bg-red-200 p-2 rounded-full text-red-500"
                  onClick={() => filePickerRef.current?.click()}
                />
              )
            }
            
            <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
            <input type="text" maxLength={150} placeholder="enter your caption" className="mt-4 w-full text-center focus:outline-none"/>
            <button 
              disabled={!selectedFile || loading}
              className="w-full rounded-md bg-red-600 text-white p-2 mt-4 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
            >Upload File</button>
          </div>
        </Modal>
      )}
    </div>
  ) 
}

export default UploadModal;