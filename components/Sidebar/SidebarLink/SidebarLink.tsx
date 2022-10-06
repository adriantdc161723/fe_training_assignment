import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  style from '../../../styles/Sidebar.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export const SidebarLink: React.FC<any> = ({linkName, linkHref, icon}) => {

    return(
        <li className={style.sidebar_menu_list}>
            <Link href={linkHref} >
            <a className={style.sidebar_menu_link}>
                <span className={style.sidebar_icon}>
                    <FontAwesomeIcon icon={icon} />
                </span>
                    {linkName}
                </a>
            </Link>
        </li>
    )
}