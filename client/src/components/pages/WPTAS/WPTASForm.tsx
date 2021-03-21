import React, { FunctionComponent, useState, ReactNode } from 'react'
import { Box, Button, Checkbox, CssBaseline, FormControl, FormControlLabel, FormGroup, Grid, GridList, GridListTile, GridListTileBar, List, ListItem, ListItemText, Paper, Radio, Switch, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import { WPTASTheme } from '../../../themes';
import { DatePicker, DatePickerProps, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ReactComponent } from '*.svg';
import { WPTASNumberQuestion, WPTASTextQuestion } from './WPTASTextFieldQuestion';
import { WPTASDateQuestion, WPTASDayOnlyQuestion, WPTASMonthOnlyQuestion, WPTASYearOnlyQuestion } from './WPTASDateQuestion';
import DateFnsUtils from '@date-io/date-fns';
import { WPTASTimeQuestion } from './WPTASTimeQuestion';



export const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    root_content: {
      position: 'absolute',
      top: "5%",
      left: "5%", 
      right: "5%",
      minHeight: "90%",
      margin: "5%",
      padding: "1rem",
      zIndex: 2
    },
  })
));



export const WPTASForm: FunctionComponent = () => {
  const classes = useStyles()

  const questions = [
    WPTASNumberQuestion({
      index: 1,
      title: 'How old are you?',
      correct_answer: 5,
      multi_choice: (ca => ca ? [ca-2, ca-1, ca, ca+1] : []),
    }),
    WPTASDateQuestion({
      index: 2,
      title: 'What is your DOB?',
      multi_choice: (dt => [
        new Date(2020, 5, 24),
        new Date(2019, 11, 8),
        ...(dt ? [dt] : []), 
        new Date(2019, 11, 8)]),
        correct_answer_component: null,
    }),
    WPTASMonthOnlyQuestion({
      index: 3,
      title: 'What month are we in?',
      multi_choice: (dt => dt ? [dt] : []), //[].filter(m=>m!==dt).concat(dt ? [dt] : [])),
    }),
    WPTASTimeQuestion({
      index: 4,
      title: 'What time of day is it?',
      multi_choice: (dt => dt ? [dt] : []), //[].filter(m=>m!==dt).concat(dt ? [dt] : [])),
    }),  
    WPTASDayOnlyQuestion({
      index: 5,
      title: "What day of the week is it?",
      multi_choice: (dt => dt ? [dt] : []), //[].filter(m=>m!==dt).concat(dt ? [dt] : [])),
    }),
    WPTASYearOnlyQuestion({
      index: 6,
      title: "What year are we in?",
      multi_choice: (dt => dt ? [dt] : []), //[].filter(m=>m!==dt).concat(dt ? [dt] : [])),
    }),
    WPTASTextQuestion({
      index: 7,
      title: 'What is the name of this place?',
      multi_choice: _ => [], 
      correct_answer_component: null,
    }),
    WPTASTextQuestion({
      index: 8,
      title: 'Face (i.e. do you recognize your doctor?)',
      multi_choice: _ => [],
      correct_answer_component: null,
    }),
    WPTASTextQuestion({
      index: 9,
      title: 'Name (i.e. do you know the name of your doctor?)',
      multi_choice: _ => [], 
      correct_answer_component: null,
    }),
    WPTASTextQuestion({
      index: 10,
      title: 'Picture i.',
      multi_choice: _=>[],
      correct_answer_component: null,
    }),
    WPTASTextQuestion({
      index: 11,
      title: 'Picture ii.',
      multi_choice: _=>[],
      correct_answer_component: null,
    }),
    WPTASTextQuestion({
      index: 12,
      title: 'Picture ii.',
      multi_choice: _=>[],
      correct_answer_component: null,
    }),
  ];

  return (
    <ThemeProvider theme={WPTASTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <Paper variant='outlined' className={classes.root_content}>
          {questions}
          {/*questions.map((q, index)=>generate_questions(q, index+1))*/}
        </Paper>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  ) 
}

/*
//const generate_q_components = <T, >(questions: (T extends WPTASQuestionMarkup<infer R> ? WPTASQuestionMarkup<R> : any)) => (
const generate_q_component = <T, >(question: WPTASQuestionMarkup<T>, index: number): JSX.Element => (
    <WPTASQuestion 
      index={index} 
      title={question.title}
      correct_answer={question.correct_answer}
      multi_choice={question.multi_choice}
      identifying={question.identifying} />
)
*/

