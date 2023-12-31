import { ReactNode } from "react"

type ParentProps = {
    listOptions: ReactNode;
    footerOptions?:ReactNode;

}

const Drawer:React.FC<ParentProps> = ({listOptions,footerOptions})=>{
    return(
      <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here (useless) */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
       </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <div>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {listOptions}
    </ul>
    </div>
  </div>
</div>
    )
}

export default Drawer