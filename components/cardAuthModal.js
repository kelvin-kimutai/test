import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function CardAuthModal({ open, setOpen, htmlString }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all p-8 overflow-visible">
                <button
                  className="absolute -top-6 -right-6 h-12 w-12 bg-slate-200 rounded-full hover:shadow transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  <IoMdClose className="w-full h-full p-3" />
                </button>
                <iframe
                  id="cardAuth"
                  srcDoc={htmlString}
                  frameBorder="0"
                  className="w-screen h-96 sm:w-[28rem] sm:h-[26rem]"
                ></iframe>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
