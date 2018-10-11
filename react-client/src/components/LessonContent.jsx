import React from 'react';
import LessonDetailHeader from './LessonDetailHeader.jsx';
import Map from './Map.jsx';
import Reviews from './Reviews.jsx';

class LessonContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.lesson);
    return (
      <div className="container" style={{ marginBottom: '30px' }}>
        <LessonDetailHeader lesson={this.props.lesson} />
        <Map style={{ height: '80vh', width: '100%' }} />
        {/* <SimpleMap location={this.props.lesson.cityOfService} /> */}
        <Reviews lesson={this.props.lesson} />
      </div>
    );
  }
}

export default LessonContent;
