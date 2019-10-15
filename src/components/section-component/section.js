import  React  from "react";

import SectionStyles from "./section.module.scss"

const Section=(props)=>{
    return (
        <div className={SectionStyles.sectionMain}>
        {props.children}
        </div>
    )
}
export default Section