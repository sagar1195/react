const Toasts = ({
  message,
  className,
}: {
  message: string;
  className?: string;
}) => {
  return (
    <div className="toast toast-top toast-end z-100">
      <div className={`alert alert-${className}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toasts;
