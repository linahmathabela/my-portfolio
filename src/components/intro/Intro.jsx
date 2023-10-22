import "./intro.css";


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Linah Mathabela</h1>
          
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">web Designer</div>
              <div className="i-title-item">freelancer</div>
              <div className="i-title-item">student</div>
              <div className="i-title-item">frontend developer</div>
            </div>

          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        
        </div>
        
           
        </div>

      <div className="i-right">
        <div className="i-bg"></div>
        </div>
      
    </div>
  );
};

export default Intro;
