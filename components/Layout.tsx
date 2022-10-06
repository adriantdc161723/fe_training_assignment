import { Sidebar } from "./Sidebar/Sidebar";
import { MainContent } from "./Main/MainContent";

export const Layout: React.FC<any> = ({children}) => {
    return(
        <>
          <Sidebar />
          <MainContent>{children}</MainContent>
      </>
    )
}