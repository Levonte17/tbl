
import t from '../assets/t.png';

function Terr(props) {
  return(
<div className="sidebyside">
<div className="side">
<img
  src={t} 
  alt='Terr'
  className="sbs"
/>
</div>
    <div className="side">
    <h1> Terrione </h1>
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

export default Terr;