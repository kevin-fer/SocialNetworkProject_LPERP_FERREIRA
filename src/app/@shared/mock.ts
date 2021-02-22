import { AddComponent } from './../add/add.component';
import { Post } from './models/post';
import { IdGeneratorUtils } from './utils/id-generator.utils';

export const POSTS: Post[] = [
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "Angular Material",
    link: "https://material.angular.io/",
    description: "Material Design components for Angular",
    icon: './assets/images/angular-material-icon.png'
  },
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "Framework CSS Bulma",
    link: "https://bulma.io/",
    description: null,
    icon: './assets/images/bulma-logo.png'
  },
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "Framework TailwindCSS",
    link: "https://tailwindcss.com/",
    description: null,
    icon: './assets/images/tailwind-css.png'
  },
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "NgBootstrap",
    link: "https://ng-bootstrap.github.io/#/home",
    description: "Reactive State for Angular",
    icon: './assets/images/ngbootstrap-logo.jpg'
  },
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "NGRX",
    link: "https://ngrx.io/",
    description: null,
    icon: './assets/images/ngrx-logo.svg'
  },
  {
    id: IdGeneratorUtils.uuidv4(),
    title: "Ionic",
    link: "https://ionicframework.com/",
    description: "One codebase. Any platform. Now in Angular",
    icon: './assets/images/ionic.jpg'
  }
];
