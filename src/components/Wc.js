
import wc from '../assets/wc.png';

function Wc(props) {
  return(
<div className="sidebyside">
<div className="side">
<img
  src={wc} 
  alt='Wc'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> Waycross </h1>
    <a href='https://www.youtube.com/watch?v=xFLjPdMGNRY'>
      Day 1
    </a>
    <br/>
    <a href='https://www.youtube.com/watch?v=MZKqtzgoqAs'>
      Day 2
    </a>
    </div>
    </div>
    )
};

export default Wc;