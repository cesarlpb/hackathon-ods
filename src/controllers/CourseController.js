import BaseController from "./BaseController";

class CourseController extends BaseController {

    // Hay que pasar la URL de la tabla y el nombre
    // Ejemplo: super('mpf6of6eisdinps', 'cartaCompleta');
    constructor(tableUrl, tableName) {
        super(tableUrl, tableName);
    }

    async getCourse() {
        let course = await this.getAll();
        return course;
    }
    a


}

export default CourseController;