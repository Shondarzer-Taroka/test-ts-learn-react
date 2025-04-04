// import { useState } from "react";
// import ShowClickModal from "./ShowClickModal";


// const ClickModal = () => {
  
//     const [isShow,setIsShow]=useState(false)

//     function handleModalChanges() {
//         setIsShow(!isShow)
//     }

//     return (
//         <div>
//             <button onClick={handleModalChanges} className="bg-green-200 flex justify-center items-center shadow-secondary rounded-4xl outline-0 border-0 px-4 py-2">open</button>
            
//             <div>
//                 {
//                    isShow && <ShowClickModal/>
//                 }
//             </div>
//         </div>
//     );
// };

// export default ClickModal;














import { useState, useRef, useEffect } from "react";
import ShowClickModal from "./ShowClickModal";

const ClickModal = () => {
  const [isShow, setIsShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  function handleModalChanges() {
    setIsShow(!isShow);
  }

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    }

    if (isShow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShow]);

  return (
    <div>
      <button
        onClick={handleModalChanges}
        className="bg-green-200 flex justify-center items-center shadow-secondary rounded-4xl outline-0 border-0 px-4 py-2"
      >
        {isShow ? "Close" : "Open"}
      </button>
      
      {isShow && (
        <div className="">
          <div ref={modalRef}>
            <ShowClickModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickModal;