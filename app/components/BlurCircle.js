const BlurCircle = ({
    top = "auto",
    left = "auto",
    right = "auto",
    bottom = "auto"
  }) => {
    return (
      <div
        className="absolute -z-50 h-[230px] w-[230px] aspect-square rounded-full bg-[#f84565]/30 blur-[30px]"
        style={{ top, left, right, bottom }}   
      ></div>
    );
  };
  
  export default BlurCircle;
  