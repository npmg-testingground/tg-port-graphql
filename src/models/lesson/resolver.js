import axios from 'axios';
import env from '../../env.config';

const resolver = {
  Lesson: {
    teacher: ({teacher_id}, args, context, info) => {
      return context.loaders.user.load(teacher_id);
    },
    room: ({room_id}, args, context, info) => {
      return context.loaders.room.load(room_id);
    },
    class: ({class_id}, args, context, info) => {
      return context.loaders.class.load(class_id);
    },
    subject: ({subject_id}, args, context, info) => {
      return context.loaders.subject.load(subject_id);
    }
  }
};

export default resolver;