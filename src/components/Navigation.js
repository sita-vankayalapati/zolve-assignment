import "../App.css"
import {Link} from "react-router-dom"
function Navigation(){
	return(
		<div className="nav">
			<Link to="/"><img src="https://image.pitchbook.com/xGn7WvL5fdKOq37Z2Yhd9EiZjkP1613538835893_200x200" alt="logo" width="50%" /></Link>
			<Link  className="link" to="/barchart">BarChart</Link>
			<Link className="link"  to="/copytoclipboard">CopyToClipBoard</Link>
		</div>

	)
}
export default Navigation;