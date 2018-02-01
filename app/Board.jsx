import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const Board = props => (
  <Card id="card">
    <CardHeader
    // title="To-Do"
    // subtitle="Subtitle"
    // avatar="images/jsa-128.jpg"
    />
    <CardMedia overlay={<CardTitle title={props.type} subtitle="" />}>
      <img src="images/nature-600-337.jpg" alt="" />
    </CardMedia>
    <CardTitle title="Tasks" subtitle="" />
    <CardText>
      <input
        id="task"
        placeholder="tasks"
        onChange={evt => props.addTasks(props.type, evt.target.value)}
      />
    </CardText>
    <TextField
      fullWidth="true"
      hintText="Submit Tasks"
      value={props.tasks[props.type]}
    />
    <CardActions>
      <FlatButton
        label="Submit"
        onClick={() => props.submitTasks(props.type, 'test')}
      />
      <FlatButton label="Cancel" />
    </CardActions>
  </Card>
);

export default Board;

// onChange={(evt) => props.addTasks(evt.target.value)
