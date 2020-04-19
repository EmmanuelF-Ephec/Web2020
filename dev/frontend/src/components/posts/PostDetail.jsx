import React, { Component } from "react";
import { NavigationBar } from "../NavigationBar";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";

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
            <Jumbo fluid className="jumbo">
              <Container>
                <h1>Titre de l'annonce</h1>
                <p>Sous-titres? de cette superbe annonce</p>
              </Container>
            </Jumbo>
            <Container>
              {" "}
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?"
            </Container>
          </div>
        ) : (
          "Rien de trouvé"
        )}
      </div>
    );
  }
}

export default PostDetail;
