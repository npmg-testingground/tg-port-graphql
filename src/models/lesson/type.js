const Lesson = `
  type Lesson {
    index: Int
    day: String
    teacher: User
    room: Room
    class: Class
    subject: Subject
  }
`;

export default () => [Lesson];