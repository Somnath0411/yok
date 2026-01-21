import './Courses.css'
const Tabitem = (props) => {
   const {func ,isactive ,details} = props
   const {tabId,displayText}=details
   const tabClassName= isactive ? "activetab" : "tab"
   const onClicktab = () => {
    func(tabId);
   }
   return(
    <li className={`course-category-tabs ${tabClassName} txt-16`}  onClick={onClicktab}>
       {displayText}
    </li>
   )
}
export default Tabitem