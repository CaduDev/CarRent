/**
 * name = string
 * duration = number
 * educator = string
 */

interface Course {
  name: String; 
  duration?: Number;
  educator: String
}

class CreateCourseService {
  execute(data: Course) {
    const { name, duration, educator } = data
    console.log(name, duration, educator);
  };
};

export default new CreateCourseService();