function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
      <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  );
}

ReactDOM.render(
<Application />,
document.getElementById('container')
)

// var users = [
//   {
//     name: "Drew",
//     avatarUrl: "https://www.base64-image.de/build/img/mr-base64-482fa1f767.png",
//     badge: ["alsdkgj", "eiegieie", "3939329239"]
//   },
//   {
//     name: "Sean",
//     avatarUrl: "https://www.base64-image.de/build/img/mr-base64-mail-1fd522927a.png",
//     badge: ["alsdkgj", "eiegieie", "3939329239"]
//   }
// ]

// function UserInfo(props){
// }

// ReactDOM.render(
//   <Application users={users} />,
//   document.getElementById("container")
// )


// // function UserInfo(props){
// //     return(
// //         <div className="UserInfo">
// //             <Avatar image={props.avatarUrl} name={props.name}>
// //         </div>
// //         <div className="UserInfo-name">
// //             {props.name}
// //         </div>
// //   )
// // }

// // function Avatar(props){
// //     return(
// //           <div classNam
// //       )
// // }





