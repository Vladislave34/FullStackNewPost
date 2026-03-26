import { useState } from "react";

const ImagePreview = ({ src }: { src: string }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Маленьке фото */}
            <img
                src={src}
                className="w-32 mb-2 rounded-2xl cursor-pointer hover:scale-105 transition"
                onClick={() => setOpen(true)}
            />

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setOpen(false)}
                >
                    <img
                        src={src}
                        className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default ImagePreview;