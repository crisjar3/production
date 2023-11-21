import back from "/back.svg";

export const FloatingButton = ({ click }: { click: () => void }) => {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <button
        className="bg-gray-800 text-white rounded-full w-30 h-30 flex items-center justify-center"
        onClick={click}
      >
        <img src={back} className="w-10 h-10 mr-3" alt="get back" />
        Reiniciar
      </button>
    </div>
  );
};

export default FloatingButton;
