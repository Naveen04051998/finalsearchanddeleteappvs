
import "./index.css"

const UserProfile=props=>{
    const {userDetails,key}=props
    console.log(key)
    const{imageUrl,role,name,uniqueNo}=userDetails
    return(

    <li className="user-card-container">
    <img src={imageUrl} className="avatar" alt="avatar"/>
    <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
<p className="user-designations">{uniqueNo}</p>
    </div>
</li>)
}

export default UserProfile