const LastThreeImage = () => {
  return (
    <div className="flex flex-col items-center mt-10 text-gray-800">
      <div
        className={`w-[300px] h-[400px] mb-4 bg-cover object-cover bg-[url('https://ccolore.com/images/main/main_%ED%95%98%EB%8B%A803.jpg')]`}
      />
      <div className="text-2xl">About Us</div>
      <div className="text-xs mt-2">Read More ＞</div>
    </div>
  );
};

export default LastThreeImage;
