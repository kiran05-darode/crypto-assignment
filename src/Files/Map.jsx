import React from "react";
function NameLi(){
    const names=["kirn","sak","prakash","karan"]
    const NameList=names.map(name =><h2>{name}</h2>)
return 
<div>{NameList}</div>


}
export default NameLi;