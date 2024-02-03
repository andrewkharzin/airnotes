import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import UserTable from "@/components/users/tables/userTable";
import { ShareUserIcon } from "@/components/dashboard/user/navboards/icons/Icons/ShareIcon";

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div className="flex-wrap">
            <Button onPress={onOpen} isIconOnly  size="sm" aria-label="Like">
                <ShareUserIcon />
            </Button>
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
            >
                <ModalContent className="bg-background/40">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center dark:text-slate-300 text-slate-600 text-light">Shoose user for share</ModalHeader>
                            <ModalBody>
                                <div style={{ maxHeight: '500px', overflowY: 'auto' }}>

                                    <UserTable />
                                </div>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
