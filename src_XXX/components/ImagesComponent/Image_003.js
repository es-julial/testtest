import chaltImg from "../../images/ElChalten.jpg"
const Image = () => {
  return (
    <div>
      <h1>Images in react</h1>
      <img 
      style={{ width: "500px", height: "500px" }} 
      src={chaltImg} 
      />
    </div>
  );
};

export default Image;
