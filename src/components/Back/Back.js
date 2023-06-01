
import {Link} from "./Back.stayled"

export const Back = ({link, children }) => {
    return(
        <Link to={link} >{children}</Link>
    )
};
