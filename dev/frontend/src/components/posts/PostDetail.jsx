import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    if (this.props.match) {
      const { id } = this.props.match.params;
      this.setState({
        id: id,
      });
    }
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        {id !== null ? (
          <div>
            <NavigationBar />
            {id}
          </div>
        ) : (
          "Rien de trouvé"
        )}
      </div>
    );
  }
}

export default PostDetail;
