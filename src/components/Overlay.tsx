import React, { ReactNode } from "react";
import Button from "./Button";

type OverlayProps = {
    OverlayBody?: React.ReactNode
    onClose?: () => void;
    children?: ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ onClose, OverlayBody, children }) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/*   <!--
            Background backdrop, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
  --> */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    {/*      <!--
                    Modal panel, show/hide based on modal state.

                    Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                    Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
                    <div className="relative transform overflow-hidden rounded-lg bg-base-100 text-left shadow-xl transition-all sm:my8 flex flex-col">

                        {OverlayBody ? OverlayBody : children}

                        {onClose && (<Button buttonText="Close" clickEvent={onClose} />)}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Overlay;
