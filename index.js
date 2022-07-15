const Button = props(props) => {
  //  Write your code here.
  const {name,className}=props;
  return <Button className={className}>{name}</Button>
 

}

const element = (
  //  Write your code here.
   <div className="container">
  <h1 className="head">Social Buttons</h1>
  <div className="cont">
  <Button name="Like" className="like-btn"/>
  <Button name="Comment" className="comment-btn"/>
  <Button name="Share" className="share-btn"/>

  </div>

  </div>
)

ReactDOM.render(element, document.getElementById('root'))
