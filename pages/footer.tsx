import React, {useState} from "react";

export default function Footer() {
    const [open, setOpen] = useState(false);
    {/* nav */}
    return(
        // <footer className="bg-gradient-to-r from-amber-300 to-amber-900 p-4 text-white text-center bottom-0 w-full">
        <footer className="bg-gradient-to-r bg-bam p-3 text-pie text-center bottom-0 w-full border-t-2 border-pie">
            <p>© 2023 BamPie. All Rights Reserved.</p>
        </footer>
    )
}