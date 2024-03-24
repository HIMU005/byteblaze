
const EmptyState = ({message, address, label}) => {
    return (
        <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16">
            <p>{message}</p>
        </div>
    );
};

export default EmptyState;