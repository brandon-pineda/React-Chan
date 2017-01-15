import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Actions from './Actions';
import Board from './Board';
//styles
import styles from './Modules.css';

class App extends Component {

    constructor(){
    	super()
        let data = [];
        let length = 71; // user defined length

        for(let i = 0; i < length; i++) {
            data.push(1);
        }
    	this.state = {
            boards: data
        }
    }

    componentWillMount() {
        Actions.getBoards((boards) => {
            this.setState({boards: boards.boards})
        })
    }

  render() {
    const numbers = [6, 43, 60, 58]
    return (
      <div>
        <div className={styles.header}>
          <h2>React-Chan</h2>
          <h3>Boards</h3>
        </div>
        <Grid fluid={true}>
            <Row>
                {numbers.map((number, index) =>
                    <Col key={index} md={3}>
                        <Board key={index}
                            title={this.state.boards[number].title}
                            description={this.state.boards[number].meta_description} />
                    </Col>
                )}
            </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
