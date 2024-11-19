const Top = (props) => {
  return (
    <div className="w-full h-7 bg-gray-300 text-xs flex justify-center items-center">
      <div>{props.topText}</div>
    </div>
  );
};

export default Top;
