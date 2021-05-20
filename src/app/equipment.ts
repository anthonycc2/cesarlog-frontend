import { Category } from './category';
import { Model } from './model';
import { Project } from './project';

export class Equipment {
    id: number;
    code: string;
    category: Category;
    model: Model;
    project: Project;
    observation: string;
    locationDate: string;

    constructor() {
        this.category = new Category();
        this.model = new Model();
        this.project = new Project();
    }
    
}

 