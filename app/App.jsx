import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import LinearProgress from 'material-ui/LinearProgress';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { getAllTasks, postNewTask } from './reducer';
import Board from './Board';
import '../style/App.css';
import '../style/Index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Scrum-in',
      types: ['To-Do', 'In-Progress', 'QA', 'Done'],
      tasks: {
        'To-Do': [],
        'In-Progress': [],
        QA: [],
        Done: [],
      },
      username: cookie.load('user'),
      avatar: cookie.load('avatar'),
    };
    this.addTasks = this.addTasks.bind(this);
  }

  addTasks(type, task) {
    // for (let key in this.state.tasks) {
    //   if (key === type) {
    //     this.state.tasks[key].push(task);
    //   }
    // }
    this.setState({
      tasks: this.state.tasks,
    });
  }

  submitTasks(type, task) {
    console.log('the type is: ', type);
    console.log('the tasks are: ', this.state.tasks);
  }

  render() {
    const styles = {
      chip: {
        margin: 4,
      },
      bar: {
        color: 'purple',
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
    return (
      <MuiThemeProvider>
        <div>
          <h1>{this.state.title}</h1>
          <div id="chip">
            <Chip style={styles.chip}>
              <Avatar src={this.state.avatar} />
              {this.state.username}
            </Chip>
          </div>
          <div id="board">
            <div id="board1">
              <Board
                type={this.state.types[0]}
                addTasks={this.addTasks.bind(this)}
                submitTasks={this.submitTasks.bind(this)}
                tasks={this.state.tasks}
              />
            </div>
            <div id="board2">
              <Board
                type={this.state.types[1]}
                addTasks={this.addTasks.bind(this)}
                submitTasks={this.submitTasks.bind(this)}
                tasks={this.state.tasks}
              />
            </div>
            <div id="board3">
              <Board
                type={this.state.types[2]}
                addTasks={this.addTasks.bind(this)}
                submitTasks={this.submitTasks.bind(this)}
                tasks={this.state.tasks}
              />
            </div>
            <div id="board4">
              <Board
                type={this.state.types[3]}
                addTasks={this.addTasks.bind(this)}
                submitTasks={this.submitTasks.bind(this)}
                tasks={this.state.tasks}
              />
            </div>
            <div id="bar">
              <p id="progress">75% done</p>
              <LinearProgress
                color={styles.bar.color}
                mode="indeterminate"
                value="75"
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
