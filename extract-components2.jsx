function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <CommentBody />
      <Badges />
    </div>
  );
}

var author = [
  {
    name: "Drew",
    avatarUrl: "https://www.base64-image.de/build/img/mr-base64-482fa1f767.png",
    badge: ["alsdkgj", "eiegieie", "3939329239"]
  },
  {
    name: "Sean",
    avatarUrl: "https://www.base64-image.de/build/img/mr-base64-mail-1fd522927a.png",
    badge: ["alsdkgj", "eiegieie", "3939329239"]
  }
]

function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    )
}

function Avatar(props){
    return(
        <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    )
}

function CommentBody(props){
    return(
        <div className="Comment-body">
            <h1>{props.commentHeading}</h1>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

function Badges(props){
    return(
        <div className="UserBadges">
            <div className="badge">{props.author.badge[0]}</div>
            <div className="badge">{props.author.badge[1]}</div>
            <div className="badge">{props.author.badge[2]}</div>
        </div>
    )
}

ReactDOM.render(
<Application author={author} />,
document.getElementById('container')
)