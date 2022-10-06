import  style from '../../styles/MainContent.module.css'

export const MainContent: React.FC<any> = ({children}) =>{
    return (
        <main className={style.main_content}>
            <div className={style.content_box}>
            {children}
            </div>
        </main>
    )
}