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
    room(_, {id}, context) {
      return context.loaders.room.load(id);
    },
    rooms() {
      return RoomAPI.get('/rooms').then(result => result.data);
    },
    user(_, {id}, context) {
      return context.loaders.user.load(id);
    },
    users() {
      return UserAPI.get('/users').then(result => result.data);
    },
    subject(_, {id}, context) {
      return context.loaders.subject.load(id);
    },
    subjects() {
      return SubjectAPI.get('/subjects').then(result => result.data)
    },
    class(_, {id}, context) {
      return context.loaders.subject.load(id);
    },
    classes() {
      return ClassAPI.get('/classes').then(result => result.data);
    },
    lesson(_, {id}, context) {
      return context.loaders.lesson.load(id);
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