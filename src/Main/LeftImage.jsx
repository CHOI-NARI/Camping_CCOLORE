const LeftImage = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "120px 60px",
          backgroundImage: `url("https://ccolore.com/images/main/primashell_basic.jpg")`,
        }}
      >
        <div className="text-white flex flex-col gap-5">
          <div className="text-4xl font-bold">프리마쉘 (Primashell®)</div>
          <div className="text-2xl">
            아웃도어 환경을 고려하여 기능을 극대화한 최고의 소재
          </div>
          <div className="text-2xl">더 알아보기 →</div>
        </div>
      </div>
    </div>
  );
};

export default LeftImage;
