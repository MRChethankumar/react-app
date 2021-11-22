
import { useLocation, useParams } from 'react-router';
import { useRouteMatch } from "react-router-dom";

export const useQuery = ()=>{
    return new URLSearchParams(useLocation().search);
}