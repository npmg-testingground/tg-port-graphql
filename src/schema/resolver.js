// const DataLoader = require('dataloader');
import axios from 'axios';
import env from '../env.config';

import {
  RoomAPI,
  UserAPI,
  SubjectAPI,
  ClassAPI,
  LessonAPI
} from '../APIs.js';

const resolve = {
  RootQuery: {
    user(_, {id}, context) {
      return context.loaders.user.load(id);
    },
    rooms() {
      return RoomAPI.get('/rooms').then(result => result.data);
    },
    users() {
      return UserAPI.get('/users').then(result => result.data);
    },
    subjects() {
      return SubjectAPI.get('/subjects').then(result => result.data)
    },
    classes() {
      return ClassAPI.get('/classes').then(result => result.data);
    },
    lessons() {
      return LessonAPI.get('/lessons').then(result => result.data);
    },
    today() {
      return LessonAPI.get('/lessons/today').then(result => result.data);
    }
  }
};

export default resolve;