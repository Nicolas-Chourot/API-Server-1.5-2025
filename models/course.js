import Model from './model.js';
import RegistrationModel from './registration.js';
import StudentModel from './student.js';
export default class Course extends Model {
    constructor() {
        super();

        this.addField('Title', 'string');
        this.addField('Code', 'string');
        this.setKey("Code");

        this.addJoint("Students", RegistrationModel, StudentModel);
    }

    bindExtraData(course) {
        this.join(course, "Students", RegistrationModel, StudentModel);
        return course;
    }
}