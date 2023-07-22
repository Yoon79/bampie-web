import React, {useState} from "react";

export default function Footer() {
    const [open, setOpen] = useState(false);
    {/* nav */}
    return(
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white text-center bottom-0 w-full">
            <p>© 2023 BamPie. All Rights Reserved.</p>
        </footer>
    )
}