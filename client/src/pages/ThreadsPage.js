import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {getThreads} from '../actions/Actions';
import Thread from '../components/Thread';
import styles from '../Modules.css';

class ThreadsPage extends Component {
    constructor(){
        super()
        let array = [];
        let numRows = [];
        let length = 71; // user defined length

        for(let i = 0; i < length; i++) {
            array.push({posts: [{com: []}]});
        }

        for(let i = 0; i < Math.trunc(array.length)/4 + 1; i++) {
            numRows.push(1)
        }
        this.state = {
            threads: array,
            numRows: numRows
        }
    }

    componentWillMount() {
        getThreads(this.props.params.id, (data) => {
            this.setState({
                threads: data.threads
            })
            this.setNumRows(data.threads.length)
        })
    }

    setNumRows = (length) => {
        let array = []
        for(let i = 0; i < Math.trunc(length)/4 + 1; i++) {
            array.push(1)
        }
        this.setState({numRows: array})
    }

    createRows = () => {
        let Rows =
            this.state.numRows.map((item, i) =>
                <Row key={i}>
                    {this.state.threads.slice(i*4, i*4+4).map((number, index) =>
                        <Col key={index} md={3}>
                            <Thread
                                title={(this.state.threads[i*4 + index].posts[0].hasOwnProperty('sub') ?
                                    this.state.threads[i*4 + index].posts[0].sub : null)}
                                description={this.state.threads[i*4 + index].posts[0].com} />
                        </Col>)}
                </Row>
        )
        return Rows;
    }

  render() {
    return (
      <div>
          <div className={styles.header}>
            <h2>React-Chan</h2>
            <h3>Board</h3>
          </div>
        <Grid fluid={true}>
            {this.createRows()}
        </Grid>
      </div>
    )
  }
}

export default ThreadsPage;
