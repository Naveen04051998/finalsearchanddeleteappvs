 
import UserProfile from "./components/UserProfile"
import "./App.css"
import { Component } from "react"

const initialuserDetailsList=[
  {imageUrl:"https://img.freepik.com/free-photo/handsome-stylish-indian-model-man-casual-close-posing-pastel-wall_496169-1577.jpg?w=1060&t=st=1678095783~exp=1678096383~hmac=aa24afdd556215767cf3f9bdbd10ef7a140662f18dc132ef7927023f5758f89e",
  name:"naveen",
  role:"software developer",
  uniqueNo:1},
  {
  imageUrl:"https://img.freepik.com/free-photo/handsome-stylish-indian-model-man-casual-close-posing-pastel-wall_496169-1577.jpg?w=1060&t=st=1678095783~exp=1678096383~hmac=aa24afdd556215767cf3f9bdbd10ef7a140662f18dc132ef7927023f5758f89e",
  name:"ajay",
  role:"software developer",
  uniqueNo:2
  },
  {
    imageUrl:"https://img.freepik.com/free-photo/handsome-stylish-indian-model-man-casual-close-posing-pastel-wall_496169-1577.jpg?w=1060&t=st=1678095783~exp=1678096383~hmac=aa24afdd556215767cf3f9bdbd10ef7a140662f18dc132ef7927023f5758f89e",
    name:"akshay",
    role:"software Tester",
    uniqueNo:3
    },
    {
      imageUrl:"https://img.freepik.com/free-photo/handsome-stylish-indian-model-man-casual-close-posing-pastel-wall_496169-1577.jpg?w=1060&t=st=1678095783~exp=1678096383~hmac=aa24afdd556215767cf3f9bdbd10ef7a140662f18dc132ef7927023f5758f89e",
      name:"saikiran",
      role:"software Tester",
      uniqueNo:4
      }

]
class App extends Component{
  state={searchInput:"",
userDetailsList:initialuserDetailsList}

  onChangeSearchInput=(event)=>{
this.setState({
  searchInput:event.target.value
})
  }

  onDeleteUser=(uniqueNo)=>{
    const {userDetailsList}=this.state
    const filteredUserList=userDetailsList.filter(
      each=>each.uniqueNo !== uniqueNo
    )
    this.setState({userDetailsList:filteredUserList})
  }

  

  render(){
    const{searchInput,userDetailsList}=this.state
    console.log(searchInput)
    const searchResults=userDetailsList.filter((eachUser)=>
    eachUser.name.includes(searchInput)
    )
    return(
      <div className="list-container">
      <h1 className="Title">Users List</h1>
      <input type="search" onChange={this.onChangeSearchInput} value={searchInput}/>
      <u1>
        {searchResults.map((eachItem)=>(
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} onDeleteUser={this.onDeleteUser}/>
        ))}
      </u1>
    </div>
    )
  }
}
export default App