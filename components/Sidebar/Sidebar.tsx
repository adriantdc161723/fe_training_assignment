import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import  style from '../../styles/Sidebar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCode, faCoffee, faGlobe, faGraduationCap, faQuoteLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { SidebarLink } from './SidebarLink/SidebarLink';

export const Sidebar: React.FC<any> = () =>{

    const router = useRouter();

    return (
        <aside className={style.sidebar}>
            <div className={style.sidebar_head}>
                <h1>Adrian<strong className={style.sidebar_title} >TDC</strong></h1>
            </div>
            <ul className={style.sidebar_menu}>
                <SidebarLink linkName="Education" linkHref="/education/Education" icon={faGraduationCap}/>
                <SidebarLink linkName="Work Experience" linkHref="/work/Work" icon={faBriefcase} />
                <SidebarLink linkName="Text Stack" linkHref="/textstack/TextStack" icon={faCode} />
                <SidebarLink linkName="Text Stack" linkHref="/motto/Motto" icon={faQuoteLeft} />
                <SidebarLink linkName=" Dynamic Sample 1" linkHref="/dynamic/sample1" icon={faGlobe} />
                <SidebarLink linkName=" Dynamic Sample 2" linkHref="/dynamic/sample2" icon={faGlobe} />
                <SidebarLink linkName=" Dynamic Sample 3" linkHref="/dynamic/sample3" icon={faGlobe} />
            </ul>
        </aside>
    )
}