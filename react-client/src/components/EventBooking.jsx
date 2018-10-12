import FeaturedLesson from "./FeaturedLesson";

class ExampleCustomInput extends React.Component {

  render () {
    return (
      <button
        className="BookNow"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

