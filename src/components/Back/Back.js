
import {Link} from "./Back.stayled"

export const Back = ({backLink, children }) => {
    return(
        <Link to={backLink} >{children}</Link>
    )
};
