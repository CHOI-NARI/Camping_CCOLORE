const RightImage = () => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "120px 60px",
          backgroundImage: `url("https://ccolore.com/images/main/main_01.jpg")`,
        }}
      >
        <div className="text-white flex flex-col gap-5">
          <div className="text-4xl font-bold">느루텐트 (NeuruTent)</div>
          <div className="text-2xl">
            간편한 설치와 가벼운 무게로 캠핑을 즐길 수 있는 텐트입니다.
          </div>
          <div className="text-2xl">더 알아보기 →</div>
        </div>
      </div>
    </div>
  );
};
export default RightImage;
