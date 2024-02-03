// components/ShareButton.tsx
import React from 'react';
import { Button } from '@nextui-org/react';

interface ShareButtonProps {
  onClick: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return (
    <Button
      gradient
      onClick={onClick}
      className="text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-700 hover:to-green-700"
    >
      Share with User
    </Button>
  );
};

export default ShareButton;
