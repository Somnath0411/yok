const ServiceButton = (props) => {
    const {isactive,name,btnfunction}=props
    const btnclassName= isactive? "service-btn-active txt-19 " : "service-btn txt-19";
    const onclickButton=()=>{
      btnfunction()
    }
    return (
      <button className={btnclassName} type="button" onClick={onclickButton}>{name}</button>
    )
}
export default ServiceButton