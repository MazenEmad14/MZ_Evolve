import React from "react";

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = "w-5 h-5",
  size,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      className={`shrink-0 inline-block ${className}`}
    >
      <path
        d="M16 3.15a12.36 12.36 0 0 0-10.57 18.77L3.8 28.2l6.43-1.68A12.36 12.36 0 1 0 16 3.15Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        d="M12.33 9.85c-.25-.56-.52-.57-.76-.58h-.65c-.23 0-.6.09-.92.44-.32.35-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.18.23 2.38 3.81 5.88 5.19 2.91 1.15 3.5.92 4.13.86.63-.06 2.03-.83 2.32-1.63.29-.81.29-1.5.2-1.64-.09-.14-.32-.23-.67-.41-.35-.17-2.03-1-2.35-1.11-.32-.12-.55-.17-.78.18-.23.35-.9 1.11-1.1 1.34-.2.23-.41.26-.76.09-.35-.18-1.47-.54-2.8-1.73-1.04-.93-1.75-2.08-1.96-2.43-.2-.35-.02-.54.15-.71.15-.15.35-.41.52-.61.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.17-.78-1.87-1.07-2.56Z"
        fill="currentColor"
      />
    </svg>
  );
};
