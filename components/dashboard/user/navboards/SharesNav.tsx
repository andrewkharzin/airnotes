// import React from "react";
import React from 'react';
import { useEffect, useState } from 'react';
import UserModalTable from "@/components/users/tables/ModalFrame";

export default function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleShareClick = () => {
        // Handle share logic here
        console.log('Sharing with user...');
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>

                <div className="mx-auto">

                        <UserModalTable isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
        </div>

                
    );
}
