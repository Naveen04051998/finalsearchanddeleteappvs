
import "./index.css"

const UserProfile=props=>{
    const {userDetails,onDeleteUser,key}=props
    console.log(key)
    const{imageUrl,role,name,uniqueNo}=userDetails
    const onDelete=()=>{
        onDeleteUser(uniqueNo)

    }
    return(


    <li className="user-card-container">
    <img src={imageUrl} className="avatar" alt="avatar"/>
    <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
<p className="user-designations">{uniqueNo}</p>
    </div>
    <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
</li>)
}

export default UserProfile